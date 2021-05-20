import { Button } from 'Common/Components/Button/Button';
import { CardLayout, IMarkdownActions } from 'Common/Components/CardLayout/CardLayout';
import { DATE_TIME_FORMAT } from 'Common/Consts';
import ComponentBox from 'Components/ComponentBox/ComponentBox';
import { isError, isLoading, isSuccess } from 'Core/Utils/Utils';
import { EOperationType, ESpecialSyntax, ESyntaxType } from 'Modules/Notes/enums';
import { INodeQueryStringParams, INoteData, ISelectionOption, SpecialSyntaxRules } from 'Modules/Notes/Models';
import { NotesServices } from 'Modules/Notes/Services';
import { SelectedNoteGuidStateAtom } from 'Modules/Notes/Store/atoms/SelectedNoteGuiState';
import { SelectedNoteStateSelector } from 'Modules/Notes/Store/selectors/SelectedNoteState';
import { getTitle } from 'Modules/Notes/Utils';
import { useMarkdownInputFieldSelection } from 'Modules/Notes/Utils/hooks/useMarkdownInputFieldSelection';
import moment from 'moment';
import React, { FC, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSetRecoilState, useRecoilValueLoadable, useResetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { MockPasswd, useCryptoAES256 } from '../Utils/hooks/useCryproAES256';

const DefaultFieldValue = { title: `${ESpecialSyntax.HEADER1} `, text: `${ESpecialSyntax.HEADER1} ` };
/**
 * @prop {boolean} isCreate Create/Edit form flag.
 */
interface INoteFormProps {
    isCreate: boolean;
}

type TNoteForm<P> = FC<P> & {
    displayName: string;
};

/**
 * Create/Edit note form.
 * @param {INoteFormProps} param0 Basic properties of the component.
 * @returns {JSX.Element} Create/Edit form.
 */
const NoteEditForm: TNoteForm<INoteFormProps> = ({ isCreate }: INoteFormProps) => {
    // Path params.
    const { id } = useParams<INodeQueryStringParams>();
    // Recoil.
    const setNoteGuid = useSetRecoilState(SelectedNoteGuidStateAtom);
    const currentNote = useRecoilValueLoadable(SelectedNoteStateSelector);
    const setNoteDataState = useSetRecoilState(SelectedNoteStateSelector);
    // Use useResetRecoilState to reset state.
    const resetNoteState = useResetRecoilState(SelectedNoteGuidStateAtom);

    const noteGuidRef = useRef(isCreate ? uuidv4() : id);
    const createDateRef = useRef(isCreate ? moment(new Date()).format(DATE_TIME_FORMAT) : (currentNote.contents as INoteData)?.startDate);
    const fieldRef = useRef<HTMLTextAreaElement>(null);

    const { encryptMessage, decryptMessage } = useCryptoAES256();
    const { getSelection, getLastSelection, setSelection } = useMarkdownInputFieldSelection(fieldRef);

    const [visibleActions, setVisibleActions] = React.useState(false);
    const [fieldValue, setFieldValue] = React.useState(isCreate ? DefaultFieldValue.text : '');
    const [syntax, setSyntax] = React.useState<ESpecialSyntax>(ESpecialSyntax.HEADER1);

    const history = useHistory();

    const isSuccessRequest = isSuccess(currentNote);
    const isErrorRequest = isError(currentNote);
    const title = isSuccessRequest ? decryptMessage((currentNote.contents as INoteData)?.title ?? '', MockPasswd) : `Requested note ID: ${id}`;

    useEffect(() => {
        setNoteGuid(noteGuidRef.current);
        return () => {
            resetNoteState();
        };
    }, []);

    useEffect(() => {
        if (isSuccessRequest && currentNote.contents && fieldValue !== (currentNote.contents as INoteData)?.text) {
            setFieldValue(decryptMessage((currentNote.contents as INoteData)?.text, MockPasswd));
        }
    }, [currentNote.contents, currentNote.state]);

    const calculateSelectionOptions = (prevSelectionState: ISelectionOption, currentSelectionState: ISelectionOption): ISelectionOption => {
        const cursorPosition = Math.min(prevSelectionState.start, currentSelectionState.start);
        if (currentSelectionState.end > prevSelectionState.start) {
            return { start: currentSelectionState.start, end: currentSelectionState.end };
        }
        return { start: cursorPosition, end: cursorPosition };
    };

    const processChangeSyntax = (prevSelectionState: ISelectionOption, currentSelectionState: ISelectionOption, specialSyntax?: ESpecialSyntax) => {
        let selection: ISelectionOption = { start: null, end: null };
        let newValue = '';
        if (specialSyntax) {
            const exist = SpecialSyntaxRules.find((x) => x.value === specialSyntax);
            if (exist && fieldValue) {
                let startValue = fieldValue.substring(0, currentSelectionState.start);
                let endValue = fieldValue.substring(currentSelectionState.end);

                if (currentSelectionState.start === 0 && currentSelectionState.end === 0) {
                    [startValue, endValue] = [endValue, startValue];
                }

                if (exist.type === ESyntaxType.PREFIX && exist.operation === EOperationType.PLUS) {
                    newValue = `${startValue}${exist.value}${' '.repeat(exist.position)}${endValue}`;
                    selection = {
                        start: currentSelectionState.start + exist.value.length + exist.position,
                        end: currentSelectionState.start + exist.value.length + exist.position
                    };
                }
                if (exist.type === ESyntaxType.COVERED && exist.operation === EOperationType.MINUS) {
                    newValue = `${startValue}${exist.value}${endValue}`;
                    selection = { start: currentSelectionState.start + exist.position, end: currentSelectionState.start + exist.position };
                }
                if (exist.type === ESyntaxType.PREFIX && exist.operation === EOperationType.HOLD) {
                    newValue = `${startValue}${exist.value}${endValue}`;
                    selection = {
                        start: currentSelectionState.start + exist.value.length,
                        end: currentSelectionState.start + exist.value.length
                    };
                }
            }
        }
        const newSelection = calculateSelectionOptions(prevSelectionState, selection);
        setFieldValue(newValue);
        setSyntax(specialSyntax);
        setSelection(newSelection);
    };

    const handleToggleActionsVisible = () => setVisibleActions(!visibleActions);

    const handleClose = () => {
        history.push(`/notes`);
    };

    const handleSave = () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (isCreate
            ? NotesServices.create({
                  note: {
                      id: noteGuidRef.current,
                      title: encryptMessage(getTitle(fieldValue), MockPasswd),
                      text: encryptMessage(fieldValue, MockPasswd),
                      startDate: createDateRef.current,
                      lastUpdate: createDateRef.current
                  }
              })
            : NotesServices.update({
                  note: {
                      ...(currentNote.contents as INoteData),
                      title: encryptMessage((currentNote.contents as INoteData).title, MockPasswd),
                      text: encryptMessage((currentNote.contents as INoteData).text, MockPasswd)
                  }
              })
        ).then((data) => {
            if (data.note) {
                setNoteDataState(data.note);
                history.push(`/notes/view/${data.note.id}`);
            } else {
                handleClose();
            }
        });
    };

    const handleChange = (value: string) => {
        if (value !== fieldValue) {
            setFieldValue(value);
            setSelection(calculateSelectionOptions(getLastSelection(), getSelection()));
        }
    };

    const handleChangeSyntax = (value: ESpecialSyntax) => {
        if (syntax !== value) {
            processChangeSyntax(getLastSelection(), getSelection(), value);
        }
        if (fieldRef.current) {
            fieldRef.current.focus();
        }
        if (visibleActions) {
            handleToggleActionsVisible();
        }
    };

    const calculateActions = (): IMarkdownActions[] => {
        const actions: IMarkdownActions[] = [
            {
                label: 'H',
                action: () => handleToggleActionsVisible(),
                isCollapse: visibleActions
            },
            {
                label: 'H1',
                action: () => handleChangeSyntax(ESpecialSyntax.HEADER1),
                isCollapse: !visibleActions
            },
            {
                label: 'H2',
                action: () => handleChangeSyntax(ESpecialSyntax.HEADER2),
                isCollapse: !visibleActions
            },
            {
                label: 'H3',
                action: () => handleChangeSyntax(ESpecialSyntax.HEADER3),
                isCollapse: !visibleActions
            },
            {
                label: 'B',
                action: () => handleChangeSyntax(ESpecialSyntax.BOLD)
            },
            {
                label: 'I',
                action: () => handleChangeSyntax(ESpecialSyntax.ITALIAN)
            },
            {
                label: 'S',
                action: () => handleChangeSyntax(ESpecialSyntax.STRIKETHROUGH)
            },
            {
                label: 'Q',
                action: () => handleChangeSyntax(ESpecialSyntax.BLOCK_QUOTE)
            },
            {
                label: 'C',
                action: () => handleChangeSyntax(ESpecialSyntax.BLOCK_CODE)
            }
        ];
        return actions;
    };

    return (
        <CardLayout title={title} isLoading={isLoading(currentNote)} isSuccess={isSuccessRequest} isError={isErrorRequest}>
            {isSuccessRequest && (
                <div>
                    <div style={{ display: 'flex' }}>
                        {calculateActions().map(
                            (it) =>
                                !it.isCollapse && (
                                    <Button key={uuidv4()} onClick={it.action}>
                                        {it.label}
                                    </Button>
                                )
                        )}
                    </div>
                    <ComponentBox
                        textRef={fieldRef}
                        fieldValue={fieldValue}
                        onChangeValue={handleChange}
                        onClose={handleClose}
                        onSubmit={handleSave}
                    />
                </div>
            )}
        </CardLayout>
    );
};

NoteEditForm.displayName = 'NoteEditForm';

export default React.memo(NoteEditForm);

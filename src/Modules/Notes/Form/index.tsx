import { CardLayout, IFooterActions, IMarkdownActions } from 'Common/Components/CardLayout/CardLayout';
import { DATE_TIME_FORMAT } from 'Common/Consts';
import { EOperationType, ESpecialSyntax, ESyntaxType } from 'Modules/Notes/enums';
import { INodeQueryStringParams, INoteData, ISelectionOption, SpecialSyntaxRules } from 'Modules/Notes/Models';
import { NotesServices } from 'Modules/Notes/Services';
import { SelectedNoteGuidStateAtom } from 'Modules/Notes/Store/atoms/SelectedNoteGuiState';
import { SelectedNoteStateSelector } from 'Modules/Notes/Store/selectors/SelectedNoteState';
import { getTitle } from 'Modules/Notes/Utils';
import { useMarkdownInputFieldSelection } from 'Modules/Notes/Utils/hooks/useMarkdownInputFieldSelection';
import moment from 'moment';
import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import { useSetRecoilState, useRecoilValueLoadable, useResetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

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
    const fieldRef = useRef<HTMLTextAreaElement>();

    const { getSelection, getLastSelection, setSelection } = useMarkdownInputFieldSelection(fieldRef);

    const [visibleActions, setVisibleActions] = React.useState(false);
    const [fieldValue, setFieldValue] = React.useState(isCreate ? DefaultFieldValue.text : '');
    const [syntax, setSyntax] = React.useState<ESpecialSyntax>(ESpecialSyntax.HEADER1);

    const { t } = useTranslation(['common']);
    const history = useHistory();

    const isSuccessRequest = currentNote.state === 'hasValue';
    const isErrorRequest = currentNote.state === 'hasError';
    const title = isSuccessRequest ? (currentNote.contents as INoteData)?.title : `Requested note ID: ${id}`;

    useEffect(() => {
        setNoteGuid(noteGuidRef.current);
        return () => {
            resetNoteState();
        };
    }, []);

    useEffect(() => {
        if (isSuccessRequest && currentNote.contents && fieldValue !== (currentNote.contents as INoteData)?.text) {
            setFieldValue((currentNote.contents as INoteData)?.text);
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
                      title: getTitle(fieldValue),
                      text: fieldValue,
                      startDate: createDateRef.current,
                      lastUpdate: createDateRef.current
                  }
              })
            : NotesServices.update({ note: currentNote.getValue() })
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

    const calculateFooterButtons = (isErrorData: boolean): IFooterActions[] => {
        const actions: IFooterActions[] = [
            {
                label: t('common:ACTIONS.Cancel'),
                action: handleClose
            }
        ];

        if (!isErrorData) {
            actions.push({
                label: t('common:ACTIONS.Save'),
                action: handleSave,
                isGeneral: true
            });
        }

        return actions;
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
            },
            {
                label: 'Img',
                action: () => handleChangeSyntax(ESpecialSyntax.IMAGE)
            },
            {
                label: 'Link',
                action: () => handleChangeSyntax(ESpecialSyntax.HYPER_LINK)
            }
        ];
        return actions;
    };

    return (
        <CardLayout
            title={title}
            isLoading={currentNote.state === 'loading'}
            isSuccess={isSuccessRequest}
            isError={isErrorRequest}
            footerActions={calculateFooterButtons(isErrorRequest)}
        >
            {isSuccessRequest && (
                <div>
                    <div style={{ display: 'flex' }}>
                        {calculateActions().map(
                            (it) =>
                                !it.isCollapse && (
                                    <button type="button" key={uuidv4()} onClick={it.action}>
                                        {it.label}
                                    </button>
                                )
                        )}
                    </div>
                    <div>
                        <textarea
                            ref={fieldRef}
                            name="markdownField"
                            id="markdownField"
                            rows={10}
                            value={fieldValue}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </div>
                </div>
            )}
        </CardLayout>
    );
};

NoteEditForm.displayName = 'NoteEditForm';

export default React.memo(NoteEditForm);

import React, { lazy, ReactElement } from 'react';

const NotesFormInput = lazy(() => import(/* webpackChunkName: "NotesFormInput" */ 'Containers/NotesList/NotesFormInput'));
const HeaderLazy = lazy(() => import(/* webpackChunkName: "NotesFormHeader" */ 'Components/Header/Header').then((mod) => ({ default: mod.Header })));

interface Props {
    onStateChange?(e: string): void;
    defaultValue?: string;
}

interface State {
    currentValue: string;
    defaultValue?: string;
}

const NotesForm = ({ children, onStateChange, defaultValue }: React.PropsWithChildren<Props>): React.ReactElement => {
    const [state, setState] = React.useState<State>({
        currentValue: '',
        defaultValue
    });

    const providerState = React.useMemo(
        () => ({
            onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
                const { value } = event.target;
                setState({
                    currentValue: value
                });
                onStateChange?.(value);
            },
            ...state
        }),
        [state, onStateChange]
    );

    return (
        <div>
            <form>
                {React.Children.map(children as ReactElement<any>, (child: ReactElement) =>
                    React.cloneElement(child, {
                        ...providerState
                    })
                )}
            </form>
        </div>
    );
};

NotesForm.displayName = 'NotesForm';
NotesForm.NoteInput = NotesFormInput;
NotesForm.Header = HeaderLazy;

export default NotesForm;

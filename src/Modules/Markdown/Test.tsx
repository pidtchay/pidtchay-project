/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-description */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';

const Syntax = {
    BOLD: 'BOLD',
    QUOTE: 'QUOTE'
};

const needSpaceAfterSyntax = [Syntax.BOLD];
// const needBackTwoStep = [Syntax.QUOTE];

/**
 * @param input
 * @param start
 * @param end
 */
function setInputSelection(input, start, end) {
    console.log({ input, start, end });
    if (end == undefined) {
        end = start;
    }
    if (input !== undefined && typeof input.setInputSelection === 'function') {
        input.setInputSelectionRange(start, end);
    }
}

/**
 * @param input
 */
function getInputSelection(input) {
    if (input === undefined) {
        return {
            start: null,
            end: null,
            length: null
        };
    }
    const { selectionStart, selectionEnd } = input;
    return {
        start: selectionStart,
        end: selectionEnd,
        length: selectionEnd - selectionStart
    };
}

/**
 * @param inputRef
 */
function useSelection(inputRef) {
    const selectRef = useRef({ start: null, end: null });

    const inputElement = inputRef.current;

    const getLastSelection = useCallback(() => {
        return selectRef.current;
    }, []);

    const setSelection = useCallback(
        (selection) => {
            setInputSelection(inputElement, selection.start, selection.end);
            selectRef.current = getInputSelection(inputElement);
        },
        [inputElement, getInputSelection]
    );

    return { getLastSelection, setSelection };
}

const App = () => {
    const [value, setValue] = useState('');
    const [currentSyntax, setCurrentSyntax] = useState('');

    useEffect(() => {
        if (!myRef || !myRef.current) {
            return;
        }
        const { selectionStart, selectionEnd } = myRef.current;
        console.log({ flag: needSpaceAfterSyntax.includes(currentSyntax) });
        if (needSpaceAfterSyntax.includes(currentSyntax)) {
            setSelection({ start: selectionStart - 3, end: selectionEnd - 2 });
        } else {
            setSelection({ start: selectionStart, end: selectionEnd });
        }
        console.log({ selectionStart, selectionEnd });
    });

    const myRef = useRef();

    const { setSelection } = useSelection(myRef);

    const onChangeValue = (val) => {
        //     const selection = getLastSelection();
        // console.log({ start: selection.start, end: selection.end });
        setValue(val);
    };

    const onChangeSyntax = (syntax) => {
        onChangeValue(value + syntax);
        setCurrentSyntax(syntax);
        if (myRef && myRef.current) {
            myRef.current.focus();
        }
    };
    return (
        <div>
            <button onClick={() => onChangeSyntax(Syntax.BOLD)}>Bold</button>
            <textarea
                ref={myRef}
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
            />
        </div>
    );
};

render(<App />, document.getElementById('root'));

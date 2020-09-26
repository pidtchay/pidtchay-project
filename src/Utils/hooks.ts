/* eslint-disable jsdoc/require-returns */
import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Store/root';

/**
 * A custom hook that gets the language setting and returns a value from the store at the specified path.
 */
export function useLiteralValue() {
    const [isLoading, setLoading] = useState(true);
    const literals = useSelector((state: RootState) => state.languages);

    useEffect(() => {
        if (Object.keys(literals.languages).length > 0) {
            setLoading(false);
        }
    }, [literals.languages, isLoading]);

    /**
     * Deep value search by key in the transferred object.
     *
     * @param {string} [path] - Key path.
     */
    function getValue(path: string): [] {
        const idx = (p, o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);
        const paths = path.split('.');
        return idx(paths, literals.languages);
    }

    return { isLoading, getValue };
}

/**
 * Pattern that we can limit the times it fires an event.
 * No matter how many times the user can trigger this, it executes only once in specific time interval.
 *
 * @param {Function} [func] - Calback function.
 * @param {number} [delay] - Interval.
 */
export function useThrottledDispatchedFunction(func: (...args) => void, delay: number) {
    const timeoutRef = useRef(null);
    const dispatch = useDispatch();
    const executFunc = useCallback(
        (...args) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => dispatch(func(...args)), delay);
        },
        [delay]
    );

    return [executFunc];
}

/**
 * Pattern that we can limit the times it fires an event.
 * No matter how many times the user can trigger this, it executes only once in specific time interval.
 *
 * @param {Function} [func] - Calback function.
 * @param {number} [delay] - Interval.
 */
export function useThrottledFunction(func: (...args) => void, delay: number) {
    const timeoutRef = useRef(null);
    const executFunc = useCallback(
        (...args) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => func(...args), delay);
        },
        [delay]
    );

    return [executFunc];
}

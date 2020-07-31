import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';

// eslint-disable-next-line jsdoc/require-returns
/**
 * A custom hook that gets the language setting and returns a value from the store at the specified path.
 */
export function useLiteralValue() {
    const [isLoading, setLoading] = useState(true);
    const literals = useSelector((state: RootState) => state.literals);

    useEffect(() => {
        if (Object.keys(literals).length > 0) {
            setLoading(false);
        }
    }, [literals, isLoading]);

    // eslint-disable-next-line jsdoc/require-returns
    /**
     * Deep value search by key in the transferred object.
     *
     * @param {string} [path] - Key path.
     */
    function getValue(path: string): [] {
        const idx = (p, o) =>
            p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);
        const paths = path.split('.');
        return idx(paths, literals);
    }

    return { isLoading, getValue };
}

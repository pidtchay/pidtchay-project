import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

/**
 * Recoil Debugger.
 */
export const DebugObserver = (): JSX.Element => {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
        console.debug('The following atoms were modified:');
        Array.from(snapshot.getNodes_UNSTABLE({ isModified: true })).forEach((entry) => {
            console.debug(entry.key, snapshot.getLoadable(entry));
        });
    }, [snapshot]);

    return null;
};

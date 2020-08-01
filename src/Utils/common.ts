import { notification } from 'antd';
import { INotificationProps } from 'Model/common';

/**
 * Pattern that we can limit the times it fires an event.
 * No matter how many times the user can trigger this, it executes only once in specific time interval.
 *
 * @param {Function} [func] - Func - function.
 * @param {number} [limit] - Limit - time interval.
 */
export const throttle = (func: () => void, limit: number) => {
    let timeout = null;
    if (!timeout) {
        timeout = setTimeout(() => {
            func();
            timeout = null;
        }, limit);
    }
};

export const debounce = (func, limit: number) => {
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(func, limit);
};

/**
 * A notification box with a icon at the left side.
 *
 * @param {INotificationProps} [config] - Necessary parameters to call a notification.
 */
export const openNotificationWithIcon = (config: INotificationProps) => {
    const { description, type, title } = config;
    notification[type]({
        message: title,
        description
    });
};
// eslint-disable-next-line jsdoc/require-returns
/**
 * Deep value search by key in the transferred object.
 * Usage example: get(literals, 'SideMenu.home').
 *
 * @param {T} [obj] - Transferred object.
 * @param {string} [path] - Key path.
 */
export function getI18nValue<T>(obj: T, path: string): [] {
    const idx = (p, o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);
    const paths = path.split('.');
    return idx(paths, obj);
}

export const convertStringArrayToString = (
    value: string[] | string
): string => {
    return Array.isArray(value) ? value.join('') : value;
};

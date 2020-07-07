import { notification } from 'antd';
import { INotificationProps } from 'Model/common';

/**
 * Pattern that we can limit the times it fires an event.
 * No matter how many times the user can trigger this, it executes only once in specific time interval.
 *
 * @param [Function] - Func - function.
 * @param [number] - Limit - time interval.
 * @param func
 * @param limit
 */
export const throttle = (func, limit: number) => {
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
 * Deep value search by key in the transferred object.
 * Usage example: get(literals, 'SideMenu.home').
 *
 * @param {T} [obj] - Transferred object.
 * @param {string} [path] - Key path.
 *
 * @returns [].
 */
export function getI18nValue<T>(obj: T, path: string): [] {
    const idx = (p, o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);
    const paths = path.split('.');
    return idx(paths, obj);
}

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

export const convertStringArrayToString = (
    value: string[] | string
): string => {
    return Array.isArray(value) ? value.join('') : value;
};

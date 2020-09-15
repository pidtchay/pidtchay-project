/* eslint-disable jsdoc/require-returns */
/**
 * Return Payload Type.
 */
export function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}

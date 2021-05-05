import API from './api';

/**
 * Handler for GET requests.
 * @param {string} url Part of the path for Rest api.
 * @returns {Promise<TResponse>} Server response body.
 */
export const GET = <TResponse, TParams = null>(url: string) => async (params?: TParams): Promise<TResponse> => {
    try {
        const resp = await API.get<TResponse>(url, { params });
        await new Promise((r) => setTimeout(r, 1000));
        return resp.data;
    } catch (e) {
        throw TypeError(`😱 Axios request failed: ${e}`);
    }
};

/**
 * Handler for POST requests.
 * @param {string} url Part of the path for Rest api.
 * @returns {Promise<TResponse>} Server response body.
 */
export const POST = <TResponse, TData = null, TParams = null>(url: string) => async (data?: TData, params?: TParams): Promise<TResponse> => {
    try {
        const resp = await API.post<TResponse>(url, data, { params });
        await new Promise((r) => setTimeout(r, 1000));
        return resp.data;
    } catch (e) {
        throw TypeError(`😱 Axios request failed: ${e}`);
    }
};

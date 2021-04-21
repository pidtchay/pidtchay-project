/**
 * Server time format for a web application.
 */
export const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm:ss';

/**
 * Data model for building routing.
 */
export interface IRoutingConfig {
    path: string;
    component: React.ReactNode;
}

/**
 * Environment variable indicating the web application launch mode.
 */
const { NODE_ENV } = process.env;

/**
 * Part of the path for REST API requests.
 */
const pathName = '/api/rest';

/**
 * Path for REST API requests.
 */
export const apiUrl = NODE_ENV === 'development' ? `http://localhost:3000${pathName}` : pathName;

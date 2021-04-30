import React from 'react';

interface IProps {
    children: React.ReactChildren | React.ReactChild;
}

/**
 * @prop {boolean} hasError Error flag.
 * @prop {Error | null} error Error data model.
 * @prop {React.ErrorInfo | null} errorInfo Information Data Model.
 */
interface IState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

/**
 * Environment variable indicating the web application launch mode.
 */
const { NODE_ENV } = process.env;

/**
 * React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
 * Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
 */
class ErrorBoundary extends React.Component<IProps, IState> {
    static getDerivedStateFromError(): Partial<IState> {
        return { hasError: true };
    }

    state: IState = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    componentDidCatch(error: Error | null, errorInfo: React.ErrorInfo | null): void {
        const { hasError } = this.state;
        if (hasError) {
            this.setState({ error, errorInfo });
        }
    }

    render(): React.ReactNode {
        const { children } = this.props;
        const { hasError, errorInfo, error } = this.state;
        if (hasError && NODE_ENV === 'develope') {
            return (
                <div>
                    <h1>Ooops, React caught an error</h1>
                    {error && <p>{error}</p>}
                    <p>{errorInfo && errorInfo.componentStack}</p>
                </div>
            );
        }
        return children;
    }
}

export default ErrorBoundary;

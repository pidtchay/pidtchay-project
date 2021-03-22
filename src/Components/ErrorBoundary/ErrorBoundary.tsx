import React from 'react';

interface IProps {
    children: React.ReactChildren | React.ReactChild;
}
interface IState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

const { NODE_ENV } = process.env;
class ErrorBoundary extends React.Component<IProps, IState> {
    // eslint-disable-next-line react/state-in-constructor
    state: IState = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    static getDerivedStateFromError(): Partial<IState> {
        return { hasError: true };
    }

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

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
    state: IState = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        const { hasError } = this.state;
        if (hasError) {
            this.setState({ error, errorInfo });
        }
    }
    render() {
        const { hasError, errorInfo, error } = this.state;
        if (hasError && NODE_ENV === 'develope') {
            return (
                <div>
                    <h1>Ooops, React caught an error</h1>
                    <p>{error && `${error}`}</p>
                    <p>{errorInfo && errorInfo.componentStack}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

import * as React from 'react';

interface IState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<unknown, IState> {
    state: IState = {
        hasError: false
    };
    static getDerivedStateFromError() {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.error(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return <h1>Что-то пошло не так.</h1>;
        }
        return this.props.children;
    }
}

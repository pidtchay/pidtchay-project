import { Button } from 'antd';
import React from 'react';
import { useLiteralValue } from 'Utils/hooks';

/**
 * Footer actions props.
 *
 * @property {Function} [onReset] Clean login form.
 * @property {Function} [onFill] Fill login form.
 */
interface IProps {
    onReset: () => void;
    onFill: () => void;
}

/**
 * Login form action component.
 *
 * @param {IProps} [param0] - Footer actions props.
 * @param {Function} [param0.onReset] - Clean login form.
 * @param {Function} [param0.onFill] - Fill login form.
 * @returns {JSX.Element} [return0] Buttons.
 */
export const LoginFormFooter: React.FC<IProps> = ({ onReset, onFill }) => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <>
            <Button type="primary" htmlType="submit">
                {getLiteralValue('ACTIONS.submit')}
            </Button>
            <Button htmlType="button" onClick={onReset}>
                {getLiteralValue('ACTIONS.reset')}
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
                {getLiteralValue('ACTIONS.fill_form')}
            </Button>
        </>
    );
};

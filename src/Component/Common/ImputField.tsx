import * as React from 'react';
import style from 'Style/InputField.less';

/**
 * Input field props.
 *
 * @property {string} [label] - Label text.
 * @property {string} [fieldType] - Current input type.
 * @property {string} [value] - Changed value.
 * @property {Function} [onChange] - Handle change event.
 */
interface InputFieldProps {
    label: string;
    fieldType: string;
    value: string;
    onChange: (field: string) => void;
}

/**
 * InputField component.
 *
 * @param {string} [label] - Label text.
 * @param {string} [fieldType] - Current input type.
 * @param {string} [value] - Changed value.
 * @param {Function} [onChange] - Handle change event.
 * @returns {JSX.Element} [return0] Input field component.
 */
export const InputField: React.FC<InputFieldProps> = ({ label, fieldType, value, onChange }) => {
    return (
        <label className={style.inputField}>
            {label}
            <input className={style.field} type={fieldType} value={value} onChange={(e) => onChange(e.target.value)} />
        </label>
    );
};

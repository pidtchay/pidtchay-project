import * as React from 'react';
import style from 'Style/InputField.less';

/**
 * Input field props.
 *
 * @property [string] Label - Label text.
 * @property [string] Type - current input type.
 * @property [string] Value - changed value.
 * @property [Function] OnChange - handle change event.
 */
interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (field: string) => void;
}

/**
 * InputField component.
 *
 * @param [string] - Label - Label text.
 * @param [string] - Type - current input type.
 * @param [string] - Value - changed value.
 * @param [Function] - OnChange - handle change event.
 * @param string.label
 * @param string.type
 * @param string.value
 * @param string.onChange
 * @param string.label
 * @param string.type
 * @param string.value
 * @param string.onChange
 * @param string.label
 * @param string.type
 * @param string.value
 * @param string.onChange
 * @param string.label
 * @param string.type
 * @param string.value
 * @param string.onChange
 */
export const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    value,
    onChange
}) => {
    return (
        <label className={style.inputField}>
            {label}
            <input
                className={style.field}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
};

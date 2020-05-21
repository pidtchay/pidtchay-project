import * as React from 'react';

/**
 * Input field props
 * @property [string] label - Label text
 * @property [string] type - current input type
 * @property [string] value - changed value
 * @property [Function] onChange - handle change event
 */
interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: any) => void;
}

/**
 * InputField component.
 * @param [string] label - Label text
 * @param [string] type - current input type
 * @param [string] value - changed value
 * @param [Function] onChange - handle change event
 */
export const InputField: React.FC<InputFieldProps> = ({label, type, value, onChange}) => {
    return(
        <label>
            {label}
            <input type={type} value={value} onChange={onChange} />
        </label>
    )
}
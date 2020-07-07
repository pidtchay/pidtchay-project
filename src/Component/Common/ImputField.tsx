/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/require-returns */
import * as React from 'react';
import styles from 'Style/Components/InputField/InputField.less';

/**
 * Input field props.
 *
 * @property {string} [name] - Input fiels name.
 * @property {string} [label] - Label text.
 * @property {string} [type] - Current input type.
 * @property {string} [value] - Changed value.
 * @property {Function} [OnChange] - Handle change event.
 */
interface InputFieldProps {
    name: string;
    label: string;
    type: string;
    value: string;
    // onChange: (value: string) => void;
}

/**
 * InputField component.
 */
export const InputField: React.FC<InputFieldProps> = ({
    name,
    label,
    type,
    value
    // onChange
}) => {
    return (
        <div className={styles.inputField}>
            <input
                id={name}
                type={type}
                value={value}
                // onClick={(e) => onChange(e.target?.value)}
                placeholder={label}
                className={styles.field}
            />
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
        </div>
        // <label className={style.inputField}>
        //     {label}
        //     <input
        //         className={style.field}
        //         type={type}
        //         value={value}
        //         onChange={(e) => onChange(e.target.value)}
        //     />
        // </label>
    );
};

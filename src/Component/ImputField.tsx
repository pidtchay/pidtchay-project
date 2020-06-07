import * as React from 'react';
import style from 'Style/InputField.less';

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
  onChange: (field: string) => void;
}

/**
 * InputField component.
 * @param [string] label - Label text
 * @param [string] type - current input type
 * @param [string] value - changed value
 * @param [Function] onChange - handle change event
 */
export const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => {
  return(
        <label className={style.inputField}>
            {label}
            <input className={style.field} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
        </label>
  );
};

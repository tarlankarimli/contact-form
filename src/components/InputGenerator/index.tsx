import React from "react";

import { IInputField } from "models";
import Input from "./Input";

interface IProps {
  /** Input fields */
  inputFields: IInputField;

  /** Classname */
  className: string;

  /** Handle selected value */
  onSelect: (field: string, value: string) => void;
}

const InputGenerator: React.FC<IProps> = (props: IProps) => {
  const { inputFields, className, onSelect } = props;

  return (
    <>
      {Object.keys(inputFields)?.map((field) => {
        const { required, type, placeholder } = inputFields[field];
        return (
          <div className={className} key={field}>
            <Input
              className={className}
              onSelect={(value) => onSelect(field, value)}
              required={required}
              type={type}
              placeholder={placeholder}
            />
          </div>
        );
      })}
    </>
  );
};

export default InputGenerator;

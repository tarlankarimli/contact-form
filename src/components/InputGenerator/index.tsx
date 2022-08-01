import React from "react";
import { FormikErrors } from "formik";

import Input from "./Input";
import { IInputField } from "models";
import { IContactUsFormValues } from "views/ContactUs/model";

interface IProps {
  /** Input fields */
  inputFields: IInputField;

  /** Classname */
  className: string;

  /** Handle input change value */
  handleInputChange: (field: string, value: string | boolean) => void;

  /** Errors */
  errors: FormikErrors<IContactUsFormValues>;

  /** Values */
  values: IContactUsFormValues;
}

const InputGenerator: React.FC<IProps> = (props: IProps) => {
  const { inputFields, className, errors, values, handleInputChange } = props;

  return (
    <>
      {Object.keys(inputFields)?.map((field) => {
        const { type, placeholder } = inputFields[field];
        return (
          <div className={className} key={field}>
            <Input
              onSelect={(value) => handleInputChange(field, value)}
              values={values}
              field={field as keyof IContactUsFormValues}
              type={type}
              placeholder={placeholder}
              error={!!errors[field as keyof IContactUsFormValues]}
            />
          </div>
        );
      })}
    </>
  );
};

export default InputGenerator;

import React from "react";
import { FormikErrors } from "formik";

import { IItem } from "api";
import { ISelectField } from "models";
import { SelectPageComponent } from "./SelectPageComponent";
import { IContactUsFormValues } from "views/ContactUs/model";

interface IProps {
  /** Select fields */
  selectFields: ISelectField;

  /** Classname */
  className: string;

  /** Values */
  values: IContactUsFormValues;

  /** Errors */
  errors: FormikErrors<IContactUsFormValues>;

  /** Handle select change */
  handleSelectChange: (key: string, value: IItem, formValue: string) => void;
}

const SelectGenerator: React.FC<IProps> = (props: IProps) => {
  const { selectFields, className, errors, values, handleSelectChange } = props;

  return (
    <>
      {Object.keys(selectFields)?.map((field) => {
        return (
          <div className={className} key={field}>
            <SelectPageComponent
              field={field as keyof IContactUsFormValues}
              values={values}
              error={!!errors[field as keyof IContactUsFormValues]}
              selectFields={selectFields}
              onSelect={(value) =>
                handleSelectChange(field, value, selectFields[field].get(value))
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default SelectGenerator;

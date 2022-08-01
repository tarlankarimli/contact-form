import React from "react";
import Select from "react-select";

import { IItem } from "api";
import { selectInputStyle } from "./selectInputStyle";
import { IContactUsFormValues } from "views/ContactUs/model";

interface IProps {
  /** Options */
  options: IItem[];

  /** Field */
  field: keyof IContactUsFormValues;

  /** Values */
  values: IContactUsFormValues;

  /** Select action */
  onSelect: (value: IItem) => void;

  /** Placeholder */
  placeholder?: string;

  /** Error */
  error: boolean;
}

const SelectInput: React.FC<IProps> = (props: IProps) => {
  const { options, onSelect, placeholder, error, field, values } = props;

  return (
    <>
      <Select
        onChange={(value) => onSelect(value as IItem)}
        options={options}
        getOptionLabel={(option: IItem) => option.name}
        getOptionValue={(option: IItem) => option.id}
        styles={selectInputStyle(error)}
        placeholder={placeholder}
        value={(values[field] || placeholder) as IItem}
      />
    </>
  );
};

export default SelectInput;

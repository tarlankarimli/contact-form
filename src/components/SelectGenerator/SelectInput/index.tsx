import React from "react";

import { IItem } from "api";
import Select from "react-select";

interface IProps {
  /** Options */
  options: IItem[];

  /** Select action */
  onSelect: (value: string) => void;

  /** Placeholder */
  placeholder?: string;
}

const SelectInput: React.FC<IProps> = (props: IProps) => {
  const { options, onSelect, placeholder } = props;

  const colourStyles = {
    control: (styles: {}) => ({
      ...styles,
      backgroundColor: "#A6D0D8",
      border: "none",
      boxShadow: "none",
      borderBottom: "1px solid #000",
      borderRadius: "none",
      marginRight: "10%",
      "&:hover": {
        borderBottom: "1px solid #000",
      },
    }),
    menuList: (styles: {}) => ({
      ...styles,
      background: "#A6D0D8",
      border: "1px solid #000",
    }),
    option: (styles: {}) => ({
      ...styles,
      backgroundColor: "#A6D0D8",
      color: "#000",
      "&:hover": {
        backgroundColor: "#00000042",
      },
    }),
    dropdownIndicator: (styles: {}) => ({
      ...styles,
      color: "#0000042",
    }),
    "&:hover": {
      backgroundColor: "#0000042",
    },
    placeholder: (styles: {}) => ({
      ...styles,
      opacity: "0.5",
      color: "#000",
    }),
   
  };

  return (
    <>
      <Select
        onChange={(value) => onSelect(value.id)}
        options={options}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        styles={colourStyles}
        placeholder={placeholder}
      />
    </>
  );
};

export default SelectInput;

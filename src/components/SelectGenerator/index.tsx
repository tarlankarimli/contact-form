import React from "react";

import { SelectPageComponent } from "./SelectPageComponent";

import { ISelectField } from "models";

interface IProps {
  /** Select fields */
  selectFields: ISelectField;

  /** Classname */
  className: string;

  /** Handle selected value */
  onSelect: (field: string, value: string) => void;
}

const SelectGenerator: React.FC<IProps> = (props: IProps) => {
  const { selectFields, className, onSelect } = props;

  return (
    <>
      {selectFields &&
        Object.keys(selectFields)?.map((field) => {
          return (
            <div className={className}  key={field}>
              <SelectPageComponent
                field={field}
                selectFields={selectFields}
                onSelect={(value) => onSelect(field, value)}
              />
            </div>
          );
        })}
    </>
  );
};

export default SelectGenerator;

import { Suspense } from "react";

import { IItem } from "api";
import { useAsyncEventDispatch } from "hooks/useAsyncEventDispatch";
import { ISelectField } from "models";
import { IContactUsFormValues } from "views/ContactUs/model";

interface IProps {
  /** Field */
  field: string;

  /** Select fields */
  selectFields: ISelectField;

  /** Values */
  values: IContactUsFormValues;

  /** Handle selected value */
  onSelect: (value: IItem) => void;

  /** Error */
  error: boolean;
}

export const SelectPageComponent: React.FC<IProps> = (props: IProps) => {
  const { field, selectFields, error, values, onSelect } = props;

  const Component = selectFields[field].component;

  const selectData = useAsyncEventDispatch({
    eventName: selectFields[field]?.eventname,
    fn: selectFields[field]?.service,
  });

  return (
    <>
      <>
        <Suspense fallback="Select field..">
          <Component
            values={values}
            onSelect={onSelect}
            options={selectData.data}
            field={field}
            placeholder={selectFields[field].placeholder}
            error={error}
          />
        </Suspense>
      </>
    </>
  );
};

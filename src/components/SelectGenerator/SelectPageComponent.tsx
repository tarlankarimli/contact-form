import { Suspense } from "react";

import { ISelectField } from "models";
import { useAsyncEventDispatch } from "hooks/useAsyncEventDispatch";

interface IProps {
  /** Field */
  field: string;

  /** Select fields */
  selectFields: ISelectField;

  /** Handle selected value */
  onSelect: (value: string) => void;
}

export const SelectPageComponent: React.FC<IProps> = (props: IProps) => {
  const { field, selectFields, onSelect } = props;

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
            onSelect={onSelect}
            options={selectData.data}
            field={field}
            placeholder={selectFields[field].placeholder}
          />
        </Suspense>
      </>
    </>
  );
};

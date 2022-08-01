import { IContactUsFormValues } from "views/ContactUs/model";

interface IProps {
  /** Type */
  type: string;

  /** Placeholder */
  placeholder: string;

  /** Field */
  field: keyof IContactUsFormValues;

  /** Values */
  values: IContactUsFormValues;

  /** Handle selected value */
  onSelect: (value: string) => void;

  /** Error */
  error: boolean;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { type, placeholder, error, values, onSelect, field } = props;

  return (
    <input
      className={error ? "contact-input-error" : null}
      value={values[field] as string}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onSelect(e.target.value)}
    />
  );
};

export default Input;

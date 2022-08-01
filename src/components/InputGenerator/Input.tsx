
interface IProps {
  /** Classname */
  className: string;

  /** Type */
  type: string;

  /** Placeholder */
  placeholder: string;

  /** Required */
  required: boolean;

  /** Handle selected value */
  onSelect: (value: string) => void;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { className, type, placeholder, onSelect, required = false } = props;
  return (
    <input
      className={className}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onSelect(e.target.value)}
    />
  );
};

export default Input;

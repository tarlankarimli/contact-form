import SelectGenerator from "components/SelectGenerator";
import { IContactUsFormValues } from "../model";
import { contactFormSelects } from "./config";

interface IProps {
  /** Values */
  values: IContactUsFormValues;

  /** Handle selected value */
  onSelect: (field: string, value: string) => void;
}

const FormContact: React.FC<IProps> = (props: IProps) => {
  const { values, onSelect } = props;

  // const fieldOnChange = (element: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = element.target;
  //   handleFieldChange(name)(value);
  // };
// console.log("sss: ", values)
  return (
    <div className="form-contact my-4">
      <form>
        <div className="form-contact-container">
          <input
            type="text"
            required
            placeholder="First name*"
            name="country"
            // onChange={fieldOnChange}
          />
        </div>
        <div className="form-contact-container">
          <input
            type="text"
            placeholder="Last name"
            className="contact-input"
          />
        </div>
        <div className="form-contact-container">
          <input
            type="text"
            placeholder="Last name"
            className="contact-input"
          />
        </div>
        <div className="form-contact-container">
          <input
            type="email"
            required
            placeholder="Email*"
            className="contact-input"
          />
        </div>
        <div className="form-contact-container">
          <input
            type="text"
            required
            placeholder="Company name*"
            className="contact-input"
          />
        </div>
        <div className="form-contact-container">
          <input
            type="text"
            placeholder="Job title"
            className="contact-input"
          />
        </div>
          <SelectGenerator
            onSelect={onSelect}
            selectFields={contactFormSelects}
            className={"form-contact-container"}
          />
        <div className="form-contact-textarea">
          <p>What would you like to talk about?</p>
          <textarea rows={6}></textarea>
        </div>
        <div className="form-terms">
          <div className="term-policy">
            <input type="checkbox" id="termPolicy" />
            <label htmlFor="termPolicy">
              By submitting this form I accept
              <a
                className="term-policy-link"
                href="/privacy-policy"
                rel="noreferrer"
                target="_blank"
              >
                privacy policy and cookie policy
              </a>
            </label>
          </div>
          <div className="term-newsletter">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              I would like to receive your newsletter.
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn link-underline">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default FormContact;

import InputGenerator from "components/InputGenerator";
import SelectGenerator from "components/SelectGenerator";
import { IContactUsFormValues } from "../model";
import { contactFormInputs, contactFormSelects } from "./config";

interface IProps {
  /** Values */
  values: IContactUsFormValues;

  /** Handle selected value */
  onSelect: (field: string, value: string) => void;
}

const FormContact: React.FC<IProps> = (props: IProps) => {
  const { values, onSelect } = props;

  return (
    <div className="form-contact my-4">
      <form>
        <InputGenerator
          onSelect={onSelect}
          inputFields={contactFormInputs}
          className={"form-contact-container contact-input"}
        />
        <SelectGenerator
          onSelect={onSelect}
          selectFields={contactFormSelects}
          className={"form-contact-container contact-select-input"}
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

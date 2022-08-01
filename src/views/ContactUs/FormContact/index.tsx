import { IItem } from "api";
import InputGenerator from "components/InputGenerator";
import SelectGenerator from "components/SelectGenerator";
import { contactFormInputs, contactFormSelects } from "./config";
import { EPolicyFields } from "enums";
import { FormikErrors } from "formik";
import { IContactUsFormValues } from "../model";

interface IProps {
  /** Values */
  values: IContactUsFormValues;

  /** Handle input change value */
  handleInputChange: (field: string, value: string | boolean) => void;

  /** Errors */
  errors: FormikErrors<IContactUsFormValues>;

  /** Handle form submit */
  handleSubmit: () => void;

  /** Handle select change */
  handleSelectChange: (key: string, value: IItem, formValue: string) => void;
}

const FormContact: React.FC<IProps> = (props: IProps) => {
  const {
    values,
    handleInputChange,
    handleSubmit,
    handleSelectChange,
    errors,
  } = props;

  const isSubmitButtonDisable = !values.termPolicy;

  return (
    <div className="form-contact my-4">
      <form>
        <InputGenerator
          handleInputChange={handleInputChange}
          values={values}
          inputFields={contactFormInputs}
          className={"form-contact-container contact-input"}
          errors={errors}
        />
        <SelectGenerator
          handleSelectChange={handleSelectChange}
          values={values}
          selectFields={contactFormSelects}
          className={"form-contact-container contact-select-input"}
          errors={errors}
        />
        <div className="form-contact-textarea">
          <p>What would you like to talk about?</p>
          <textarea rows={6}></textarea>
        </div>
        <div className="form-terms">
          <div className="term-policy">
            <input
              type="checkbox"
              id="termPolicy"
              checked={values.termPolicy}
              onChange={() =>
                handleInputChange(EPolicyFields.termPolicy, !values.termPolicy)
              }
            />
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
            <input
              type="checkbox"
              id="newsletter"
              checked={values.newsletter}
              onChange={() =>
                handleInputChange(EPolicyFields.newsletter, !values.newsletter)
              }
            />
            <label htmlFor="newsletter">
              I would like to receive your newsletter.
            </label>
          </div>
        </div>
        <button
          type="reset"
          className="submit-btn link-underline"
          onClick={handleSubmit}
          disabled={isSubmitButtonDisable}
        >
          Submit form
        </button>
      </form>
    </div>
  );
};

export default FormContact;

import CompanyContacts from "./CompanyContacts";
import FormContact from "./FormContact";
import { useFormHandler } from "./useFormHandler";

import "./index.scss";

const ContactUs = () => {
  const handleSubmit = () => {};

  /** Handle field change */
  const handleFieldChange = (name: string) => (value: string) => {
    setFieldValue(name, value);
  };

  const onSelectChange = (field: string, value: string) => {
    setFieldValue(field, value);
  }

  /** Formik */
  const formik = useFormHandler({
    handleSubmit,
  });

  const { setFieldValue, values } = formik;

  return (
    <>
      <div className="contact-us py-8">
        <div className="container">
          <div className="contact-us-body">
            <h4 className="contact-us-header">Contact us</h4>
            <CompanyContacts />
            <FormContact values={values} onSelect={onSelectChange}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

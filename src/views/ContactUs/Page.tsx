import { useState } from "react";

import { IItem } from "api";
import CompanyContacts from "./CompanyContacts";
import FormContact from "./FormContact";
import { useFormHandler } from "./useFormHandler";

import "./index.scss";

const ContactUs = () => {
  const [formValues, setFormValues] = useState({});

  /** Handle form submit */
  const handleSubmit = () => {
    resetForm();
    setFormValues({});
  };

  /** Handle input change */
  const handleInputChange = (field: string, value: string | boolean) => {
    setFieldValue(field, value);
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  /** Handle select change */
  const handleSelectChange = (key: string, value: IItem, formValue: string) => {
    setFieldValue(key, value);
    setFormValues({
      ...formValues,
      [key]: formValue,
    });
  };

  /** Formik */
  const formik = useFormHandler({
    handleSubmit,
  });

  const { setFieldValue, values, errors, resetForm } = formik;

  return (
    <>
      <div className="contact-us py-8">
        <div className="container">
          <div className="contact-us-body">
            <h4 className="contact-us-header">Contact us</h4>
            <CompanyContacts />
            <FormContact
              values={values}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              handleSubmit={() => formik.handleSubmit()}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

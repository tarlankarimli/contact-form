import { useState } from "react";

import { ContactUsServices, IItem, IUserContact } from "api";
import CompanyContacts from "./CompanyContacts";
import { CREATE_USER_CONTACT } from "eventTypes";
import FormContact from "./FormContact";
import { publishAsyncEvent } from "hooks/pubSub";
import { useFormHandler } from "./useFormHandler";

import { useEventListener } from "hooks/useEventListener";

const ContactUs = () => {
  const [formValues, setFormValues] = useState<IUserContact>();
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const submitUserContact = () => {
    publishAsyncEvent({
      eventName: CREATE_USER_CONTACT,
      fn: () => ContactUsServices.userContact(formValues),
      onSuccess: () => {
        resetForm();
        setFormValues({} as IUserContact);
      },
    });
  };

  useEventListener(CREATE_USER_CONTACT, [() => setErrorMessage(true)]);

  /** Handle form submit */
  const handleSubmit = () => {
    submitUserContact();
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
        {errorMessage ? (
          <div>
            <h3 className="error-message">Something went wrong</h3>
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default ContactUs;

import CompanyContacts from "./CompanyContacts";
import FormContact from "./FormContact";

import "./index.scss";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us py-8">
        <div className="container">
          <div className="contact-us-body">
            <h4 className="contact-us-header">Contact us</h4>
            <CompanyContacts />
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

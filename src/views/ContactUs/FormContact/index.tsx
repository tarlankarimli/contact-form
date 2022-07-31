const FormContact = () => {
  return (
    <div className="form-contact my-4">
      <form>
      <div className="form-contact-container">
        <input type="text" required placeholder="First name*" />
      </div>
      <div className="form-contact-container">
        <input type="text" placeholder="Last name" className="contact-input" />
      </div>
      <div className="form-contact-container">
        <input type="text" placeholder="Last name" className="contact-input" />
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
        <input type="text" required placeholder="Company name*" className="contact-input" />
      </div>
      <div className="form-contact-container">
        <input type="text" placeholder="Job title" className="contact-input" />
      </div>
      <div className="form-contact-container">
        <select>
          <option value="value1">value1</option>
          <option value="value2">value2</option>
          <option value="value3">value3</option>
          <option value="value4">value4</option>
        </select>
      </div>
      <div className="form-contact-textarea">
        <p>What would you like to talk about?</p>
        <textarea rows={10}></textarea>
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
      <button type="submit" className="submit-btn link-underline">Submit form</button>
      </form>
    </div>
  );
};

export default FormContact;

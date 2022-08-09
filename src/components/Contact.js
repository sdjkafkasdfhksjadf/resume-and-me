import React, { useState } from "react";
import "../components/Contact.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/7bd34b40-1779-11ed-98e8-53e0970ab51c"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form id = "cform"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <h1>Contact form</h1>
      <div class = "cname">
        <input type="text" placeholder="Your name" name="name" size = "43" required />
      </div>
      <div class = "cemail">
        <input type="email" placeholder="Email" name="email" size = "43" required />
      </div>
      <div class = "cthemessage">
        <textarea id = "cmessage" placeholder="Your message" name="message" column = "30" required /> 
      </div>
      <div>
        <button id = "cbutton" type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;
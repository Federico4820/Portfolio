import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha"; // 👈 libreria captcha
import mail from "../assets/SocialImg/email.png";
import github from "../assets/SocialImg/github.png";
import linkedin from "../assets/SocialImg/linkedIn.png";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xvgbvoge");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <h2>Let's talk</h2>
        <p className="subtitle success">✅ Messaggio inviato con successo!</p>
      </section>
    );
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Conferma che non sei un robot.");
      return;
    }
    handleSubmit(e); // 👈 invio solo se captcha valido
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Let's talk</h2>
      <p className="subtitle">
        Mandami un messaggio — ti risponderò il prima possibile.
      </p>

      <form onSubmit={handleFormSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Il tuo nome" required />

        <input type="email" name="email" placeholder="La tua email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          name="message"
          placeholder="Il tuo messaggio"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <ReCAPTCHA
          sitekey="6Lc7CsIrAAAAAE-XTyfQnhjn7-Xs-wPD8QFo895n"
          onChange={handleCaptchaChange}
        />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Invio in corso..." : "Inviami"}
        </button>
      </form>

      <p className="alt-contact">
        Oppure scrivimi direttamente a{" "}
        <a href="mailto:federico@lepore.pro">federico@lepore.pro</a>
      </p>

      <div className="social-links">
        <a
          href="https://github.com/Federico4820"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="social-icon-git" />
        </a>

        <a
          href="https://www.linkedin.com/in/federico-lepore-developer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="social-icon-linkedin" />
        </a>

        <a href="mailto:federico@lepore.pro">
          <img src={mail} alt="Email" className="social-icon-mail" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

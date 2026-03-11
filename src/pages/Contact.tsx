import emailjs from '@emailjs/browser';
import { useRef, type FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            alert('Message envoyé avec succès !');
            console.log(result.text);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
          }
        );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-title">Contactez-moi</h1>
          <p className="contact-subtitle">
            Vous avez un projet, une idée ou une opportunité de collaboration&nbsp;? 
            Envoyez-moi un message et je vous répondrai dès que possible.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  name="user_name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  name="user_email"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Décrivez votre besoin ou votre projet..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Envoyer le message
            </button>
          </form>

          <div className="contact-info">
            <h2>Informations</h2>
            <p>
              Basé à Antananarivo, je suis disponible pour des projets freelance, des stages
              ou des collaborations à distance.
            </p>
            <ul>
              <li>Email&nbsp;: <span>mariotfanantenana@gmail.com</span></li>
              <li>Ville&nbsp;: <span> Madagascar</span></li>
            </ul>
            {/* Tu pourras ajouter ici tes liens LinkedIn / GitHub plus tard */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

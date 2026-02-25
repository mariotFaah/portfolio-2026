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
            alert('Message envoyé avec succès!'); 
            console.log(result.text);
            form.current?.reset();
          }, 
          (error) => { 
            console.log(error.text);
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
          } 
        );
    }
  }; 

  return (
    <div>
      <h1>Contactez-moi</h1>
      <div> 
        <form className='cf' ref={form} onSubmit={sendEmail}> 
          <div className='half left cf'> 
            <input 
              type='text' 
              placeholder='Nom' 
              name='user_name' 
              required 
            /> 
            <input 
              type='email' 
              placeholder='Email' 
              name='user_email' 
              required 
            /> 
          </div>  
          <div className='half right cf'> 
            <textarea 
              name='message' 
              placeholder='Message'
              required 
            ></textarea> 
          </div> 
          <input 
            type='submit' 
            value='Envoyer' 
            id='input-submit' 
          /> 
        </form> 
      </div> 
    </div>
  );
};

export default Contact;
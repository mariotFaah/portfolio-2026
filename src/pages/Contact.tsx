import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'; 
import './Contact.css';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => { 
    e.preventDefault(); 
  emailjs 
    .sendForm( import.meta.env.VITE_REACT_APP_SERVICE_ID, import.meta.env.VITE_REACT_APP_TEMPLATE_ID, form.current, import.meta.env.VITE_REACT_APP_PUBLIC_KEY ) 
    .then( (result) => { 
      alert('message sent successfully...'); 
      console.log(result.text); }, (error) => { 
        console.log(error.text); 
      } ); 
  }; 

  return (
    <div>
     
      <h1>Contactez-moi</h1>

      <div> 
    <form className='cf' ref={form} onSubmit={sendEmail}> 
      <div className='half left cf'> 
        <input type='text' placeholder='Name' name='user_name' /> 
        <input type='email' placeholder='Email address' name='user_email' /> 
      </div>  
      <div className='half right cf'> 
        <textarea name='message' type='text' placeholder='Message'></textarea> 
      </div> 
      <input type='submit' value='Submit' id='input-submit' /> 
    </form> 
  </div> 
      
    </div>
  );
};

export default Contact;


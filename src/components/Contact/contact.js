import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7svteaa', 'template_hiw1zfo', form.current, 
         'oPXJn4oSDuJ0mNaD9'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
        <div id='ContactPage'>
            <h1 className="contactTitle">Contact</h1>
            <span className="contactDesc">Fill out the below form to get in touch with me </span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Name' name='your_name' required/>
                <input type="text" className="email" placeholder='Your Email' name='your_email' required/>
                <textarea className='msg' name="message" id="" rows="5" placeholder='Your Message' required></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                
            </form>
        </div>
    </section>
  )
}

export default Contact;

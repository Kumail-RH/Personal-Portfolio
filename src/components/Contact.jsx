import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import { themeContext } from '../Context';
import { useContext } from 'react';
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setdone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_tur7yjs', 'template_261pw7d', form.current, {
            publicKey: 'RdtCqUtJvu3UBlclv',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setdone(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='contact-form' id="Contact">
      <div className="w-left">
        <div className="awesome">
            <span style={{color: darkMode?'white':''}}>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name'/>
            <input type="email" name="user_email" className='user' placeholder='Email' />
            <textarea name="message" className='user' rows="10" placeholder='Message'></textarea>
            <input type="submit" value="Send" className='button' />
            <span>{done && 'Thanks for Contacting Me..'}</span>
            <div className='blur c-blur1' style={{background: "var(--purple)"}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact

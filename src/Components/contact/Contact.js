import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineGithub} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eifyzup', 'template_7kzxxkk', form.current, 'cPnkCTbPaFnTrSCUv')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <a href="mailto:keerthanagiri2000@gmail.com">keerthanagiri2000@gmail.com</a>
          </article>
          <article className='contact_option'>
            <AiOutlineGithub className='contact_option_icon'/>
            <h4>Github</h4>
            <a href="https://github.com/keerthanagiri2000" target="_blank" rel="noreferrer">keerthanagiri2000</a>
          </article>
          <article className='contact_option'>
            <IoMdCall className='contact_option_icon'/>
            <h4>Mobile </h4>
            <h5>+91 7708902184</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" placeholder='Your Full Name' required />
           <input type= 'email' name='email' placeholder='Your Email' required />
           <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


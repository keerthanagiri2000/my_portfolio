import React from 'react'
import './footer.css'
import {HiMail} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#"  className='footer_logo'>KEERTHANA</a>

      <ul className='footer_links'>
         <li><a href='/#'>Home</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#education'>Education</a></li>
         <li><a href='#skills'>Skills</a></li>
         <li><a href='#projects'>Projects</a></li>
         <li><a href='#education'>Education</a></li>
         <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
         <a href='https://github.com/keerthanagiri2000' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         <a href='mailto:keerthanagiri2000@gmail.com' rel="noopener noreferrer"><HiMail /></a>
      </div>

      <div className="footer_content">
          <small>Made with 🧡 using React</small>
      </div>
    </footer>
  )
}

export default Footer
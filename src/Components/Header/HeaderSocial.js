import React from 'react'
import {HiMail} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
       <a href='https://github.com/keerthanagiri2000' target="_blank"><FaGithub /></a>
       <a href='mailto:keerthanagiri2000@gmail.com' ><HiMail /></a>
       
    </div>
  )
}

export default HeaderSocial
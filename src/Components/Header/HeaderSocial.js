import React from 'react'
import {HiMail} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
       <a href='https://github.com' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
       <a href='https://gmail.com' target="_blank" rel="noopener noreferrer"><HiMail /></a>
       
    </div>
  )
}

export default HeaderSocial
import React from 'react'
import './header.css'
import RTA from './RTA'
import ME from '../../Asserts/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Keerthana</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <RTA />
          <HeaderSocial />
          <div className='me'>
            <img src={ME} alt='me' />
          </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
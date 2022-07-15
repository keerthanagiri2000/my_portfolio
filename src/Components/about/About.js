import React from 'react'
import './about.css'
import ME from '../../Asserts/aboutme.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
           <div className='about_me_image'>
             <img src={ME} alt="About_image" />
           </div>
        </div>

        <div className='about_content'>
          <p>
            A passionate  Full stack web developer with background knowledge of MERN stacks.Always seeking challenging position 
            in and organization  where my skills find ample of opportunities for upgradation and growth of the company.
            I'm an enthusiastic individual with zeal to learn explore and grow.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;


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
          Full stack web with background knowledge of MERN stacks , along with a knack of building applications with utmost efficiency. Strong professional with a BE. I build websites using HTML, CSS, JavaScript, and a other frameworks and libraries.
          </p>
          <h3>Here are a Few Highlights:</h3>
          <ul>
            <li>Full Stack web and mobile development</li>
            <li>Interactive Front End as per the design</li>
            <li>React</li>
            <li>Building REST API</li>
            <li>Managing database</li>
          </ul>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;


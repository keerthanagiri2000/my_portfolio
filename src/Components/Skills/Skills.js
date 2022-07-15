import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend Development</h3>
          <div className='skills_content'>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon' />
               <div>
                 <h4>HTML5</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>CSS3</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>JavaScript</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Bootstrap</h4>
                </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>React JS</h4>
               </div>
             </article>
          </div>
        </div>
        <div className='skills_backend'>
          <h3>Backend Development</h3>
          <div className='skills_content'>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Node JS</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>MongoDB</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>MySQL</h4>
               </div>
             </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


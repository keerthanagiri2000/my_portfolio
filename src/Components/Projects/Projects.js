import React from 'react'
import './projects.css'
import IMG1 from '../../Asserts/project1.gif'
import IMG2 from '../../Asserts/project2.png'
import IMG3 from '../../Asserts/project3.jpg'
import IMG4 from '../../Asserts/project4.png'

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'project-1',
    github: 'https://github.com',
    demo: 'https://www.netlify.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'project-2',
    github: 'https://github.com',
    demo: 'https://www.netlify.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'project-3',
    github: 'https://github.com',
    demo: 'https://www.netlify.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'project-4',
    github: 'https://github.com',
    demo: 'https://www.netlify.com/'
  }
  ]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='projects_item'>
                <div className='projects_item_image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='projects_item_links'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects

/* 2:10:00 */
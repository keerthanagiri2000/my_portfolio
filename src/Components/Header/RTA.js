import React from 'react'
import Resume from '../../Asserts/resume.pdf'

const RTA = () => {
  return (
    <div className='rta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default RTA
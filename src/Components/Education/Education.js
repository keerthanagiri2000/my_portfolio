import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa'



const Education = () => {
 /* const data = [
    {
      id: 1,
      cardTitle: 'Sasurie college of engineering',
      cardDetailedText: `Bachelor Degree in Electrical & Electronics Engineering`,
      title: '(2017-2021)'
    },
    {
      id: 2,
      cardTitle: 'Government higher secondary school',
      cardDetailedText: `Higher Secondary`,
      title: '(2015-1017)'
    },
    {
      id: 3,
      cardTitle:'Government higher secondary school',
      cardDetailedText: `Lower Secondary School`,
      title: '(2005-2015)'
    }
  ]*/
  return (
    <section id='education'>
      <h5>What I have studied</h5>
      <h2>Education</h2>
         
<VerticalTimeline>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.4) ' }}
           date='2017 - 2021'
           iconStyle={{  background: 'linear-gradient(45deg, transparent, teal, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Sasurie college of engineering</h3>
          <p className="vertical-timeline-element-subtitle">Bachelor Degree in Electrical & Electronics Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="2015 - 2017"
           iconStyle={{ background: 'linear-gradient(45deg, transparent, teal, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Government higher secondary school</h3>
          <h4 className="vertical-timeline-element-subtitle">Higher Secondary</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="2005 - 2015"
           iconStyle={{background: 'linear-gradient(45deg, transparent, teal, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Government higher secondary school</h3>
          <h4 className="vertical-timeline-element-subtitle">Lower Secondary</h4>
        </VerticalTimelineElement>
        
     </VerticalTimeline>
      </section >
  )
}

export default Education

/*  */
import React from 'react'
import './works.css';
import Project1 from '../../assests/amazonshop.png';
import Project2 from '../../assests/amazonshop.png';
import Project3 from '../../assests/amazonshop.png';
import Project4 from '../../assests/amazonshop.png';
import Project5 from '../../assests/amazonshop.png';
import Project6 from '../../assests/amazonshop.png';

function Works() {
  return (
   <section id='work'>
  <h2 className='worksTitle'>My Projects</h2>
  {/* <span className='worksDesc'>I take pride in paying attention to the details and making sure that my work is pixel project.</span> */}
  <div className='worksImgs'>
  <img src={Project1} alt='' className='workingImg' />
  <img src={Project2} alt='' className='workingImg' />
  <img src={Project3} alt='' className='workingImg' />
  <img src={Project4} alt='' className='workingImg' />
  <img src={Project5} alt='' className='workingImg' />
  <img src={Project6} alt='' className='workingImg' />
  </div>
 
   </section>
  )
}

export default Works
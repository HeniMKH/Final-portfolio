import React from 'react';
import './intro.css';
import bg from '../../assests/heroImage.png';
// import bg from '../../assests/'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
  <section id='intro'>
    <div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Hengameh</span> <br/> Full Stack Developer</span>
    <p className='introPara'>I am a skilled web developer with more passionate in creating Apps</p>
    <Link><button className='btn'><img src={'btnImg'} alt=''className='btnImg' />Hire Me</button></Link>
    </div>

    <img src={bg} alt="profile" className='bg'/>

  </section>
  )
}

export default Intro
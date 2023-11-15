import React from 'react';
import './intro.css';
import bg from '../../assests/heroImage.png';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-scroll'
const Intro = () => {
  return (
  <section id='intro'>
    <div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Hengameh</span> <br/> Full Stack Developer</span>
    <p className='introPara'>I am a skilled web developer with more passionate in creating Apps</p>
    <Link><button className='btn'><img src={'btnImg'} alt=''className='btnImg' />Hire Me</button></Link>

    <a href="https://github.com/HeniMKH" target="blank" aria-label="icons to navigate to github">
    <AiFillGithub className="icon" />
    </a>
    <a href="https://www.linkedin.com/in/hengameh-mohammadkhani-a8212417a/" target="blank" aria-label="icons to navigate to linkedin">
    <AiFillLinkedin className='icon' />
    </a>
    <a href="mailto:afsooneday@gmail.com" target="_blank" aria-label="icons to navigate to email" rel="noreferrer">
    <AiOutlineMail className='icon' />
    </a>
    
    </div>

    <img src={bg} alt="profile" className='bg'/>

  </section>
  )
}

export default Intro
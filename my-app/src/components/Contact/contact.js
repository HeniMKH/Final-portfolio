import React from 'react';
import './contact.css'

function Contact() {
  return (
    <section className='contactPage'>
      <div id='contact'>
        <h1 className='contactpageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactform'></form>
        <input type='text' className='name'placeholder='Your Name'/>
        <input type='eamil' className='email'placeholder='Your Email'/>
        <textarea className='msg' name='message' rows="S" placeholder='Your Message'></textarea>
        <button type='submit'value= 'send'className='submitBtn'>Submit</button>
        {/* <div className='link'>
          <img src={} alt=''className='link' />
          <img src={} alt=''className='link' />
          <img src={} alt=''className='link' />
        </div> */}
           {/* <div className="hero_socials flex">
                    <a href="https://www.linkedin.com/in/boshra-mahmoudi/" target="blank" aria-label="icons to navigate to linkedin">
                        <AiFillLinkedin className='icon' />
                    </a> */}
          </div>

       


    </section>
  )
}

export default Contact
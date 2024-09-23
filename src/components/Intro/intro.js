import React from 'react'
import './intro.css'
import bg from '../../assets/hema pic.jpg'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
          
          <span className="introText">I'm Hema </span>
          <p className="introPara">Passionate Software Engineer | Web Application Developer | Machine Learning Development | Proficient in Swift, Python, Java, React, Node.js, MongoDB, SQL, MySql </p>
           <button className='button'><a href='https://drive.google.com/file/d/11OnEN8w0VLFra0wYI048y4NtCAW1Iw0U/view?usp=drive_link'>Download Resume </a></button>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;



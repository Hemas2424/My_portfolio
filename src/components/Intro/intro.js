import React from 'react'
import './intro.css'
import bg from '../../assets/hema pic.jpg'


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
          
          <span className="introText">I'm Hema </span>
          <p className="introPara">Passionate Software Engineer | Web Application Developer | Machine Learning Development | Proficient in Python, React, Node.js, MongoDB, SQL, MySql,Figma, Articulate 360</p>
           <button className='button'><a href='https://drive.google.com/drive/folders/1KnfhwuN1EKFR-FwiINz1hnZMyozFTdtr?usp=drive_link'>Download Resume </a></button>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;



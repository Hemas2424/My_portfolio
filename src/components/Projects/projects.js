import React from 'react'
import './projects.css'
import music from '../../assets/musiclogo.png'
import shedule from '../../assets/shedule.png'
import portfolio from '../../assets/portfolio.png'
import proctor from '../../assets/proctor.png'
import fashion from '../../assets/fashion.png'

const projects = () => {
  return (
    <section id="Projectsec">
        <h1 className="projectTitle">Projects</h1>
        <div className="projectGrid">
  
        <div className="projectImgWrapper">
        <a href="https://github.com/Hemas2424/Astronaut-Daily-Schedule" target="_blank" rel="noopener noreferrer">
        <img src={shedule} alt="shedule" className="projectImg" /> </a>
        </div>
        <div className="learnImgWrapper">
          <a href="https://github.com/Hemas2424/My_portfolio" target="_blank" rel="noopener noreferrer">
          <img src={portfolio} alt="portfolio" className="projectImg" /></a>
        </div>
        <div className="learnImgWrapper">
          <a href="https://github.com/Hemas2424/AI_proctoring" target="_blank" rel="noopener noreferrer" >
          <img src={proctor} alt="proctor" className="projectImg" /></a>
        </div>
        <div className="learnImgWrapper">
          <a href="https://github.com/Hemas2424/FashionApp" target="_blank" rel="noopener noreferrer" >
          <img src={fashion} alt="fashion" className="projectImg" /></a>
        </div>
        <div className="learnImgWrapper">
          <a href="https://github.com/Hemas2424/MusicApp" target="_blank" rel="noopener noreferrer" >
          <img src={music} alt="music" className="projectImg" /></a>
        </div>
        
      </div>
    </section>
  )
}

export default projects

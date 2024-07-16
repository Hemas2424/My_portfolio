import React from 'react'
import './projects.css'
import music from '../../assets/musiclogo.png'

const projects = () => {
  return (
    <section id="Projectsec">
        <h1 className="projectTitle">Projects</h1>
        <div className="projectGrid">
        <div className="projectImgWrapper">
          <img src={music} alt="music" className="projectImg" />
        </div>
        <div className="learnImgWrapper">
          <img src={music} alt="music" className="projectImg" />
        </div>
        <div className="learnImgWrapper">
          <img src={music} alt="music" className="projectImg" />
        </div>
        <div className="learnImgWrapper">
          <img src={music} alt="music" className="projectImg" />
        </div>
        <div className="learnImgWrapper">
          <img src={music} alt="music" className="projectImg" />
        </div>
        
      </div>
    </section>
  )
}

export default projects

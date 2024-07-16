import React from 'react';
import './learn.css';
import python from '../../assets/pythonlogo.png';
import java from '../../assets/javalogo.png';
import html from '../../assets/htmllogo.png';
import css from '../../assets/csslogo.png';
import js from '../../assets/javascriptlogo.png';
import reactLogo from '../../assets/reactlogo.png';
import ml from '../../assets/machinelearn.png';
import swift from '../../assets/swiftlogo.png';
import figma from '../../assets/figms.png';

const Learn = () => {
  return (
    <section id="learning">
      <h1 className="learnTitle">Skills</h1>
      <div className="learnGrid">
        <div className="learnImgWrapper">
          <img src={python} alt="Python" className="learnImg" />
          <span>Python</span>
        </div>
        <div className="learnImgWrapper">
          <img src={java} alt="Java" className="learnImg" />
          <span>Java</span>
        </div>
        <div className="learnImgWrapper">
          <img src={ml} alt="Machine Learning" className="learnImg" />
          <span>Machine Learning</span>
        </div>
        <div className="learnImgWrapper">
          <img src={html} alt="HTML" className="learnImg" />
          <span>HTML</span>
        </div>
        <div className="learnImgWrapper">
          <img src={css} alt="CSS" className="learnImg" />
          <span>CSS</span>
        </div>
        <div className="learnImgWrapper">
          <img src={js} alt="JavaScript" className="learnImg" />
          <span>Javascript</span>
        </div>
        <div className="learnImgWrapper">
          <img src={reactLogo} alt="React" className="learnImg" />
          <span>React</span>
        </div>
        <div className="learnImgWrapper">
          <img src={swift} alt="Swift" className="learnImg" />
          <span>Swift</span>
        </div>
        <div className="learnImgWrapper">
          <img src={figma} alt="Figma" className="learnImg" />
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};

export default Learn;

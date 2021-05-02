import React from "react";
import "./../index.css";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ParticlesBg from 'particles-bg'

// const percentage = 90;
const html='HTML5';
const css='CSS3';
const bootstrap='Bootstrap';
const javascript='JavaScript';
const react='React';

const html1=90;
const css1=75;
const bootstrap1=80;
const javascript1=75;
const react1=60;
const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">MY SKILLS</h1>
     
      

  
      <div className="techs">
      <ParticlesBg type="ball" bg={true} />
      <li style={{ width: 100, height: 100 }}>
      <CircularProgressbar   value={html1} text={`${html}`}
      
      styles={buildStyles({
        textColor: 'black',
        fill: '#f88',
      })}/>
      </li >
      <li style={{ width: 100, height: 100 }}>
      <CircularProgressbar   value={css1} text={`${css}`}
      
      styles={buildStyles({
        pathColor: `rgba(24,240,18, ${react1 / 100})`,
        textColor: 'black',
        fill: '#f88',
      })}/>
      </li >
      <li style={{ width: 100, height: 100 }}>
      <CircularProgressbar   value={bootstrap1} text={`${bootstrap}`}
      
      styles={buildStyles({
        pathColor: `rgba(240,240,18, ${react1 / 100})`,
        textSize:'15px',
        textColor: 'black',
        fill: '#f88',
      })}/>
      </li >
      <li style={{width: 100, height: 100 }}>
      <CircularProgressbar   value={javascript1} text={`${javascript}`}
      
      styles={buildStyles({
        pathColor: `rgba(240,10,80, ${javascript1 / 100})`,
        textSize:'14px',
        textColor: 'orange',
      })}/>
      </li >
      <li style={{ width: 100, height: 100  }}>
      <CircularProgressbar   value={react1} text={`${react}`}
      
      styles={buildStyles({
        pathColor: `rgba(240,24,18, ${react1 / 100})`,
        textColor: 'orange',
      })}/>
      </li >
      </div>
    </section>
  );
};

export default Skills;

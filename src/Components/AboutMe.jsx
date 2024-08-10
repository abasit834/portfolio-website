import React from "react";
import Header from "./Header";
import "../App.css";
import Skills from "./Skills";

const AboutMe = () =>{
  return<div className="about">
    <Header/>
    <section>
    <div class="about-me">
    <h1>About Me</h1>
    <p>I'm a skilled MERN stack developer specializing in creating dynamic and responsive websites. <br /> With a solid foundation in MongoDB, Express.js, React, and Node.js, I build modern web applications <br /> that are fast, efficient, and user-friendly. I also have proficiency in creating mobile apps using flutter. <br /> Moreover I am familiar with both SQL and NoSQL Datbases such as MySQL and Firebase etc.</p>
    <div className="skills">
      <h1>Skills</h1>
      <div className="skill-box">
      <span className="skill"><Skills name="HTML5"/></span>
      <span className="skill"><Skills name="CSS3"/></span>
      <span className="skill"><Skills name="Javascript"/></span>
      <span className="skill"><Skills name="Jquery"/></span>
      <span className="skill"><Skills name="React"/></span>
      <span className="skill"><Skills name="Redux"/></span>
      <span className="skill"><Skills name="Nodejs"/></span>
      <span className="skill"><Skills name="Expressjs"/></span>
      <br />
      <span className="skill"><Skills name="MongoDB"/></span>
      <span className="skill"><Skills name="Flutter"/></span>
      <span className="skill"><Skills name="Firebase"/></span>
      <span className="skill"><Skills name="MySQL"/></span>
      <span className="skill"><Skills name="Digital Image Processing"/></span>
      <span className="skill"><Skills name="Playwright Automation"/></span>
      </div>
    </div>
      
      <div className="experience">
      <h1>Experience</h1>
      <div className="exp-info">
        <h4 className="animateFadeIn">Full Stack Developer Intern</h4>
        <p className="animateFadeIn">Emblem Technologies</p>
        <span className="animateFadeIn" id="lhr">Lahore</span>
        <span className="animateFadeIn" id="full">Full time</span>
        <span className="animateFadeIn" id="date">July 2024-Present</span>
      </div>

      </div>

    </div>
    </section> 

  </div>
}

export default AboutMe;
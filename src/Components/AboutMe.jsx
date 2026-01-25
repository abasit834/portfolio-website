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
      <span className="skill"><Skills name="React Native"/></span>
      <span className="skill"><Skills name="React"/></span>
      <span className="skill"><Skills name="Redux"/></span>
      <span className="skill"><Skills name="Nodejs"/></span>
      <span className="skill"><Skills name="Expressjs"/></span>
      <span className="skill"><Skills name="Playwright Automation"/></span>
      <br />
      <span className="skill"><Skills name="MongoDB"/></span>
      <span className="skill"><Skills name="Firebase"/></span>
      <span className="skill"><Skills name="MySQL"/></span>
      <span className="skill"><Skills name="Digital Image Processing"/></span>
      <span className="skill"><Skills name="Data Science"/></span>
      </div>
    </div>
      
      <div className="experience">
      <h1>Experience</h1>

      <div className="exp-info">
        <h4 className="animateFadeIn">React Native Developer</h4>
        <p className="animateFadeIn">Sooqz Dubai</p>
        <span className="animateFadeIn" id="lhr">Lahore (Remote) </span>
        <span className="animateFadeIn" id="full">Part Time</span>
        <span className="animateFadeIn" id="date">April-December 2025</span>
      </div>
      <br />
      <div className="exp-info">
        <h4 className="animateFadeIn">Automation Testing Intern</h4>
        <p className="animateFadeIn">Emblem Technologies</p>
        <span className="animateFadeIn" id="lhr">Lahore</span>
        <span className="animateFadeIn" id="full">Full time</span>
        <span className="animateFadeIn" id="date">July-August 2024</span>
      </div>

      </div>

    </div>
    </section> 

  </div>
}

export default AboutMe;
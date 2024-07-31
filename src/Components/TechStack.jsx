import React from "react";
import html from "../Assets/html-5.png"
import css from "../Assets/social.png";
import js from "../Assets/js.png"
import node from "../Assets/icons8-node-js.svg";
import express from "../Assets/icons8-express-js.svg";
import mongo from "../Assets/icons8-mongodb.svg";
import flutter from "../Assets/icons8-flutter.svg";
import python from "../Assets/python.png";
import git from "../Assets/icons8-git.svg"
import github from "../Assets/icons8-git (1).svg";
import playwright from "../Assets/playwright-seeklogo.svg";

import "../App.css";

const TechStack = ()=>{
    return (<div className="techstack" id="tech-section">
        
        <h2>My Tech Stack</h2>
        <p>With a solid foundation in various modern technologies, I have successfully created numerous projects. <br id="one"/> My technical skills span a diverse array of tools and platforms, enabling me <br />to deliver robust and scalable solutions.</p>
        
    <div className="tech">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src="/logo192.png" alt="" />
        <img src={node} alt="" />
        <img src={express} alt="" />
    </div>

    <div className="tech">
        <img src={mongo} alt="" />
        <img src={flutter} alt="" />
        <img src={python} alt="" />
        <img src={playwright} alt="" />
        <img src={git} alt="" />
        <img src={github} alt="" />  
    </div>
    </div>
    )
}

export default TechStack;
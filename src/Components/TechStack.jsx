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
import mysql from "../Assets/icons8-mysql.svg";
import npm from "../Assets/icons8-npm.svg";
import vscode from "../Assets/icons8-vs-code.svg";
import redux from "../Assets/icons8-redux.svg";
import firebase from "../Assets/icons8-firebase.svg";
import postman from "../Assets/postman-icon-svgrepo-com.svg";
import Header from "./Header";
import "../App.css";

const TechStack = ()=>{
    return (
    <div className="techstack">
        <Header/>
        <section className="tech-content">
        <div className="start">   
        <h1>My Tech Stack</h1>
        <p>With a solid foundation in various modern technologies, I have successfully created numerous projects. <br id="one"/> My technical skills span a diverse array of tools and platforms, enabling me to deliver robust and <br />scalable solutions.</p>
        </div> 
    <div className="tech one">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src="/logo192.png" alt="" />
        <img src={redux} alt="" />
        <img src={node} alt="" />
    </div>

    <div className="tech one">
        <img src={express} alt="" />
        <img src={mongo} alt="" />
        <img src={mysql} alt="" />  
        <img src={firebase} alt="" />
        <img src={flutter} alt="" />
        <img src={python} alt="" />
    </div>

    <div className="start">
        <h1>Tools</h1>
    </div>
    <div className="tech two">
        <img src={vscode} alt="" />
        <img src={postman} alt="" />
        <img src={npm} alt="" />
        <img src={playwright} alt="" />
        <img src={git} alt="" />
        <img src={github} alt="" />
    </div>

    </section>
    </div>
    )
}

export default TechStack;
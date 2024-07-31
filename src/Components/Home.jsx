import React from "react";
import layers from "../Assets/layers.png"
import "../App.css";
import memoji from "../Assets/memoji.png";
import { useState} from "react";
import sidebaricon from "../Assets/menu.png"
import close from "../Assets/close.png";


const Home = () =>{

    const [active,setActive] = useState("");
    const [show,setShow] =  useState(false);

    return <>
        <header>
        <img className="logo animateSlideDown" src={layers} alt="" width={"60px"} height={"60px"}/>
        <div className={show ? "sidebar show" : "sidebar hide"}>
            <img src={close} alt="" width="15px" height="15px" onClick={()=>{setShow(false)}}/>
            <nav id="small">
            <ul>
                <li><a href="/" onClick={()=>{setShow(false)}}>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#tech-section"onClick={()=>{setShow(false)}}>TechStack</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        </div>
        <nav id="large">
            <ul>
                <li><a className={ active === "home"?"active":""} href="/" onClick={()=>setActive("home")}>Home</a></li>
                <li><a className={ active === "about"?"active":""} href="#" onClick={()=>setActive("about")}>About</a></li>
                <li><a className={ active === "tech"?"active":""} href="#tech-section" onClick={()=>setActive("tech")}>TechStack</a></li>
                <li><a className={ active === "projects"?"active":""} href="#" onClick={()=>setActive("projects")}>Projects</a></li>
                <li><a className={ active === "contact"?"active":""} href="#" onClick={()=>setActive("contact")}>Contact</a></li>
            </ul>
        </nav>
        <img id="icon" src={sidebaricon} alt="" onClick={()=>{setShow(true)}}  width="30px" height="29px"/>
        </header>
        <div className="intro">
        <div className="text">  
        <h1 className="animateFadeIn">Hey,<br />I'm Abdul <span>Basit</span></h1>
        <p className="animateLeftIn">Crafting innovative solutions with code and creativity.</p>
        </div> 
        <div className="image">
        <img className="animateRightIn" src={memoji} alt="" width={"200px"} height={"200px"} />
        </div>
        </div>
    </>
}

export default Home;
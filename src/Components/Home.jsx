import React from "react";
import layers from "../Assets/layers.png"
import "../App.css";
import memoji from "../Assets/memoji.png";
import { useState} from "react";


const Home = () =>{

    const [active,setActive] = useState("");

    return <>
        <header>
        <img className="logo animateSlideDown" src={layers} alt="" width={"60px"} height={"60px"}/>
        <nav>
            <ul>
                <li><a className={ active === "home"?"active":""} href="/" onClick={()=>setActive("home")}>Home</a></li>
                <li><a className={ active === "about"?"active":""} href="#" onClick={()=>setActive("about")}>About</a></li>
                <li><a className={ active === "tech"?"active":""} href="#tech-section" onClick={()=>setActive("tech")}>TechStack</a></li>
                <li><a className={ active === "projects"?"active":""} href="#" onClick={()=>setActive("projects")}>Projects</a></li>
                <li><a className={ active === "contact"?"active":""} href="#" onClick={()=>setActive("contact")}>Contact</a></li>
            </ul>
        </nav>
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
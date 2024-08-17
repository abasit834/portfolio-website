import React from "react";
import layers from "../Assets/layers.png"
import "../App.css";
import { useState} from "react";
import sidebaricon from "../Assets/menu.png"
import close from "../Assets/close.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () =>{
    const navigate =  useNavigate();
    const [show,setShow] =  useState(false);

    return <>
        <header>
        <img onClick={()=>{navigate("/")}} className="logo animateSlideDown" src={layers} alt="" width={"60px"} height={"60px"}/>
        <div className={show ? "sidebar show" : "sidebar hide"}>
            <img src={close} alt="" width="15px" height="15px" onClick={()=>{setShow(false)}}/>
            <nav id="small">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/techstack">TechStack</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        </div>
        <nav id="large">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/techstack">TechStack</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <img id="icon" src={sidebaricon} alt="" onClick={()=>{setShow(true)}}  width="30px" height="29px"/>
        </header>
    </>
}

export default Header;
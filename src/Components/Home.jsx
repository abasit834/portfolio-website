import React from "react";
import "../App.css";
import memoji from "../Assets/memoji.png";
import Header from "./Header";


const Home = () =>{

    return <div>
        <Header/>
        <div className="intro">
        <div className="text">  
        <h1 className="animateFadeIn">Hey,<br />I'm Abdul <span>Basit</span></h1>
        <p className="animateLeftIn">Crafting innovative solutions with code and creativity.</p>
        </div> 
        <div className="image">
        <img className="animateRightIn" src={memoji} alt="" width={"250px"} height={"250px"} />
        </div>
        </div>
    </div>
}

export default Home;
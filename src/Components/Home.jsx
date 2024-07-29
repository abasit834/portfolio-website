import React from "react";
import code from "../Assets/code.png"
import "../App.css";

const Home = () =>{

    return <>
        <header>
        <img className="logo" src={code} alt="" width={"60px"} height={"60px"}/>
        </header>
        <div className="intro">
        <h1>Hey,<br />My Name is Abdul Basit</h1>
        <p>I Craft innovative solutions with code and creativity.</p>
        {
            //comments
        }
        </div>
    </>
}

export default Home;
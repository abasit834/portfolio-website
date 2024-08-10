import React from "react";
import Header from "./Header";
import "../App.css";
import Card from "./Card";

const Projects = () =>{
    return <div className="projects">
    <Header/>
    <section>    
    <h1>Projects</h1>
    <div className="project-cards">
    <Card title="Blood Donation Website" github="https://www.github.com/abasit834/blood-donation" stack="MERN STACK"/>
    <Card title="Automatic Attendance System" stack="Python/MySQL"/>
    <Card title="Gender Gaze - Blog Website" stack="HTML/CSS, JavaScript"/>
    <Card title="BMI Calculator App" stack="Flutter/Firebase"/>
    <Card title="Car Rental Management System" stack="Java/Microsoft SQL Server"/>
    </div>
    </section>
    </div>
}

export default Projects;
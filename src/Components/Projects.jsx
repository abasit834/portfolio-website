import React from "react";
import Header from "./Header";
import "../App.css";
import Card from "./Card";
import client from "../Assets/Client.jpg";
import client2 from "../Assets/7619d283-fae4-4eb6-8bee-8a07260475a3.webp";


const Projects = () =>{
    return <div className="projects">
    <Header/>
    <section>    
    <h1>Projects</h1>
    <div className="project-cards">
    <Card title="Gender Gaze - Blog Website" stack="HTML/CSS, JavaScript" img="/gender-gaze.png" description="I developed a fully responsive website for a client, allowing them to effortlessly upload and manage their articles online. The site is optimized for all devices, ensuring a smooth user experience across different screen sizes. This project successfully met the client's needs for both functionality and accessibility." demo="https://abasit834.github.io/Gender-Gaze-Website/HTML/home.html" github="https://github.com/abasit834/Gender-Gaze-Website"/>
    <Card title="Blood Donation Website" github="https://www.github.com/abasit834/blood-donation" stack="MERN STACK" img="/blood-donation.png" description="The project features a React front end and an  Express/MongoDB backend.It collects donor information, retrieves donors for recipients, and updates donor records. Admins use a secure dashboard to view total donors and recipients." demo="https://github.com/abasit834/blood-donation/blob/master/README.md"/>
    <Card title="Automatic Attendance System" stack="Python/MySQL" img="/AutomaticAttendance.png" description="This Project is used to mark attendance of students using camera. The system first enrolls the students and then mark the attendance of enrolled students in a registered course. This project is created with the help of Open CV and LBPH Algorithm in Python." github="https://github.com/abasit834/Automatic-Attendance-System" demo="https://www.linkedin.com/feed/update/urn:li:activity:7224755098491473920/"/>
    <Card title="Car Rental Management System" stack="Java/Microsoft SQL Server" img="/rent-a-car.png" description="This management system stores car and rental data, with a Java frontend for user interaction. It uses Microsoft SQL Server for backend data management. The system efficiently handles and retrieves rental information." github="https://github.com/abasit834/CarRentalManagmentSystem"/>
    <Card title="BMI Calculator App" stack="Flutter/Firebase" img="/Bmi.png" description="This app prompts users to input their weight and height to calculate their Body Mass Index (BMI). The app securely stores user data in a Firebase database for easy access and management. This solution provides users with a simple and efficient way to track their health metrics." github="https://github.com/abasit834/BMI-App" demo="https://github.com/abasit834/BMI-App/blob/main/README.md"/>
    </div>
    </section>
    
    <section className="testimonial">
        <h1>Testimonials</h1>
        <div className="first-test">
        <div>
        <img src={client} alt="" />
        </div>    
        <p>I have hired Basit for numerous personal projects, and he consistently exceeds expectations. His responsiveness and attention to detail are commendable, and his clear communication significantly simplifies the project's execution. Working with him is always a smooth and productive experience. <br /><span>Muhammad Usman</span></p>
        </div>
    </section>
    <br />
    <section className="testimonial">
        <div className="first-test">
        <div>
        <img src={client2} alt="" />
        </div>    
        <p>Excellent seller and very good service... i would go back to this seller for future similar tasks.... <br/><span>Maheralkhan - Fiverr</span></p>
        </div>
    </section>
    </div>
}

export default Projects;
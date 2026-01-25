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
    <Card title="Sooqz App" stack="Expo React Native" img="/sooqz-app.png" description="Sooqz is a cross-platform online classified mobile application built to enable seamless buying and selling of products. It includes real-time in-app messaging, secure Stripe payment integration, and Google Maps for accurate location-based listings. Advanced ad filtering and search features enhance user experience and content discovery.Available on Play Store and App Store." demo="https://play.google.com/store/apps/details?id=com.b4s17.sooqz" github="" code={false}/>
    <Card title="Simcorp Remodeling" github="" stack="React + Vite" img="/simcorp.png" description="Built a responsive React single-page marketing website with clear information architecture, sticky CTAs, mobile click-to-call, and a lead-generation form with email alerts.
Improved performance and accessibility using lazy-loaded lightweight bundles, semantic markup, and caching for fast initial loads." demo="https://simcorp4u.org/" code={false}/>
    <Card title="Valet Parking Dubai" github="" stack="HTML CSS Javascript Php" img="/valet-parking.png" description="Developed a professional valet parking website tailored for Dubai-based services, enabling users to easily explore offerings, make parking reservations, and contact the service provider. The platform focuses on a premium user experience with a responsive design, clear service presentation, and streamlined booking flow to support efficient operations and customer convenience." demo="https://valetparkingdubai.com/" code={false}/>
    <Card title="Khans Veterinary Services" github="" stack="React + Vite + Tailwind" img="/kvs.png" description="Developed a responsive website for Khans Veterinary Services to present veterinary care offerings, clinic information, and contact details in a clear and accessible way. The site focuses on trust and usability with a clean layout, service-focused content, and mobile-friendly design, enabling pet owners to easily learn about treatments, book inquiries, and connect with the clinic." demo="https://khansveterinaryservices.com/" code={false}/>
    <Card title="WarehouseBot" github="" stack="MERN Stack + Webots" img="/warehouse-bot.png" description="Developed an intelligent warehouse automation platform with a React + Vite frontend for real-time monitoring and management of warehouse operations, backed by a Node.js and Express backend handling job scheduling, robot coordination, JWT-based authentication, and REST API integration with the Webots robotics simulator, enabling autonomous robot control, live job tracking, failure recovery, robot status monitoring, analytics dashboards, and real-time data synchronization between robot simulations and warehouse systems." demo="https://warehouse-bot.vercel.app/" code={false}/>
   
    <Card title="Blood Donation Website" github="https://www.github.com/abasit834/blood-donation" stack="MERN Stack" img="/blood-donation.png" description="The project features a React front end and an  Express/MongoDB backend.It collects donor information, retrieves donors for recipients, and updates donor records. Admins use a secure dashboard to view total donors and recipients." demo="https://github.com/abasit834/blood-donation/blob/master/README.md" code={true}/>

    <Card title="Adversarial Scam Detection" github="" stack="Flask" img="/adversarial-scam.png" description="Developed an adversarial scam detection system using a publicly available Kaggle dataset to classify non-scam, regular scam, and adversarial scam messages, leveraging character-level TF-IDF to capture obfuscated scam patterns, training and evaluating multiple machine learning models with LinearSVC emerging as the best performer, and achieving 93% classification accuracy on an imbalanced dataset with strong adversarial scam detection performance." demo="https://b4s17.pythonanywhere.com/" code={false}/>
    <Card title="Automatic Attendance System" stack="Python + MySQL" img="/AutomaticAttendance.png" description="This Project is used to mark attendance of students using camera. The system first enrolls the students and then mark the attendance of enrolled students in a registered course. This project is created with the help of Open CV and LBPH Algorithm in Python." github="https://github.com/abasit834/Automatic-Attendance-System" demo="https://www.linkedin.com/feed/update/urn:li:activity:7224755098491473920/"/>
    
    <Card title="Happy Paws" github="" stack="Electron JS + MYSQL" img="/happy-paws.png" description="Happy Paws is a desktop-based veterinary management application built with Electron.js and MySQL that centralizes clinic operations, securely managing services, employees, appointments, and records with role-based access control for administrators and staff, while providing a clean, responsive interface to improve workflow efficiency, productivity, and overall service quality." demo="https://drive.google.com/drive/folders/1ReW6IQhE-I6E-J1w6aHg1AlkBOJ5Hjbf?usp=drive_link" code={false}/>
    <Card title="Car Rental Management System" stack="Java + Microsoft SQL Server" img="/rent-a-car.png" description="This management system stores car and rental data, with a Java frontend for user interaction. It uses Microsoft SQL Server for backend data management. The system efficiently handles and retrieves rental information." github="https://github.com/abasit834/CarRentalManagmentSystem" code={true}/>
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
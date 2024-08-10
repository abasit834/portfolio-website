import React from "react";
import Header from "./Header";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from '@formspree/react';

const Contact = () =>{
    const [name,setName] =  useState(!sessionStorage.getItem("name")?"":sessionStorage.getItem("name"));
    const [email,setEmail] =  useState(!sessionStorage.getItem("email")?"":sessionStorage.getItem("email"));
    const [message,setMessage] =  useState(!sessionStorage.getItem("message")?"":sessionStorage.getItem("message"));
    const [touch,setTouched] = useState(false);
    const [state, handleSubmit] = useForm("movadoqg");

    function containsNumber(str) {
        return /\d/.test(str);
    }
    function isValidEmail(email) {
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function handleFormSubmit(e){
            e.preventDefault();
            if( name==="" || email==="" || message === "")
            {
                // alert("Please fill in all the fields");
                toast.error('Please fill in all the fields', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                return; 
            }  
            if(containsNumber(name))
            {
                toast.warning('Name cannot be Numeric', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                return;
            }  

            handleSubmit(e);
            setName("");
            setEmail("");
            setMessage("");
            setTouched(false);
            sessionStorage.clear();
            toast.success('Message Sent Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
    }

    if(state.succeeded){console.log("Form sent!!")}

    return <div className="contact">
        <Header/>
        
        <section>
        <h1>Let's Discuss your Project</h1>
        <p className="animateFadeIn">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <form onSubmit={handleFormSubmit}>
            <div className="contact-form">
            <div> 
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" value={name} onChange={(e)=>{sessionStorage.setItem("name",e.target.value);setName(e.target.value)}}/>
            {
                containsNumber(name)?<span style={{color:"red",fontSize:"0.7em"}}>*Name can't be numeric</span>:""
            }
            </div>   
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email"value={email} onChange={(e)=>{sessionStorage.setItem("email",e.target.value);setEmail(e.target.value)}}/>
            {
                !isValidEmail(email) && email.length > 0 ?<span style={{color:"red",fontSize:"0.7em"}}>*Invalid Email</span>:""
            }
            </div>   
            <div>
            <label htmlFor="message">Message</label>
            <textarea type="text" id="message" name="message" placeholder="Enter Your Message" value={message} onChange={(e)=>{sessionStorage.setItem("message",e.target.value);setMessage(e.target.value); setTouched(true)}}/>
            {
                touch && message===""?<span style={{color:"red",fontSize:"0.7em"}}>*Please type any message</span>:""
            }
            </div>   
            <div className="btn">
            <button type="submit">Submit</button>
            </div>
            </div>
        </form>
        </section>
        <ToastContainer />
    </div>
}

export default Contact;
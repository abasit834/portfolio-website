import React from "react";
import github from "../Assets/icons8-git (1).svg";
import link from "../Assets/icons8-link-50.png";
import {Link} from "react-router-dom";

const Card = (props) => {
    return <div className="card">
        <div className="img">
            <img src={props.img} alt="" />
        </div>
        <div className="details">
            <h3>{props.title}</h3>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, libero nam iure, iste nemo veritatis animi hic consequuntur ab dolorum possimus quas maiores cumque necessitatibus. Pariatur quos inventore quidem similique.{props.descripion}</p>
            </article>
            <h4>Tech Stack : </h4> <span>{props.stack}</span>
        </div>
        <div className="links">

        <div id="preview">
                <img src={link} alt="" height="30px" width="30px"/>
                <span><Link to={props.preview}>Live Preview</Link></span>
            </div>

            <div id="github">
                <img src={github} alt="" height="30px" width="30px"/>
                <span><Link to={props.github}>View Code</Link></span>
            </div>
        </div>
    </div>
}
export default Card;
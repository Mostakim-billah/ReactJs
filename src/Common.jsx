import React from "react";
import { NavLink } from "react-router-dom";
import Img1 from "./img/work1.jpg";
const Common = (props) => {
    return(
        <>
            <div className="col-md-4 col-11 mx-auto">
                <div className="Img___div">
                <img src = {props.imgsrc} className="img-fluid" alt="protfulio"/>
                <div className="Blur___"></div>
                <span><NavLink to="">{props.viw}</NavLink></span>
                </div>      
            </div>
        </>
    )
}
export default Common;
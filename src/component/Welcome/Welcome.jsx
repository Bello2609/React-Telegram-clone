import React from "react";
import classes from "./Welcome.module.css";
import * as image from "../Images/Images";
import {Link} from "react-router-dom"
const Welcome = ()=>{
    // onClickHandler = ()=>{
     //    6|oxAgOXbXiBaKLn6SPi4pmprwMeyJi5DExa1WAo1k
                                   
    // }
    return(
        <div className={classes.Welcome}>
        <div className={classes.welcome_header}>
            <img src={image.Img1} alt="welcome" />
        </div>
        <div className={classes.welcome_body}>
            <div className={classes.welcome_body_text}>
                <h4>Telegram For Web</h4>
                <p>welcome to the official telegram for web</p>
                <p>it's fast and secure</p>
                <button type="submit"><Link to="/k" style={{
                    textDecoration: "none",
                    color: "white"
                }}>START MESSAGING</Link></button>
            </div>
        </div>
    </div>
    )
   
}
export default Welcome;
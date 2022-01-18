import React from "react";
import classes from "./OptionBtn.module.css";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { CgLock } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
const OptionBtn = ({isOpen})=>{
    return(
        isOpen ?
        <>
            <div className={classes.option}>
                <div className={classes.option_list}>
                    <p><MdOutlineNotificationsOff /></p>
                    <h5>Mute</h5>
                </div>
                <div className={classes.option_list}>
                    <p><BsCheckCircle /></p>
                    <h5>Select Messages</h5>
                </div>
                <div className={classes.option_list}>
                    <p><FaShare /></p>
                    <h5>Share Contact</h5>
                </div>
                <div className={classes.option_list}>
                    <p><CgLock /></p>
                    <h5>Block User</h5>
                </div>
                <div className={classes.option_list}>
                    <p><MdDeleteOutline /></p>
                    <h5>Delete Chat</h5>
                </div>
            </div>
        </>
        : null
    );
}
export default OptionBtn;
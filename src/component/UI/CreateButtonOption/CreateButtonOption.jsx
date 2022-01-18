import React from "react";
import classes from "./CreateButtonOption.module.css";
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdGroup } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const CreateButtonOption = ({optionOpen})=>{
    let assignedOpen = [classes.createButtonOption, classes.optionIsClose];
    if(optionOpen){
        assignedOpen = [classes.createButtonOption, classes.optionIsOpen]
    }
    return (
       
        <>
            <div className={assignedOpen.join(" ")}>
                <div className={classes.createButtonOption_list}>
                    <p><HiOutlineSpeakerphone /></p>
                    <h5>New Channel</h5>
                </div>
                <div className={classes.createButtonOption_list}>
                    <p><MdGroup /></p>
                    <h5>New Group</h5>
                </div>
                <div className={classes.createButtonOption_list}>
                    <p><FaRegUser /></p>
                    <h5>New Private Chat</h5>
                </div>
               
            </div>
        </>
        
    );
}
export default CreateButtonOption;
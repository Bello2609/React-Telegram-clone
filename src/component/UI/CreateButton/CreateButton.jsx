import React from "react";
import classes from "./CreateButton.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { TiTimes } from "react-icons/ti";

const CreateButton = ({optionIsClick})=>{

    
    return (
        <>
            <div className={classes.createButton} onClick={optionIsClick}>
                <p><MdModeEditOutline /></p>
            </div>
        </>
    );
}
export default CreateButton;
import React from "react";
import classes from "./UserProfile.module.css";
import { FaTimes } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import * as profilepic from "../../../../Images/Images";
import { MdOutlinePhone } from "react-icons/md";
import { IoMdNotificationsOutline } from 'react-icons/io';

const UserProfile = ({userOpen, userClose})=>{
    let assignedProfile = [classes.UserProfile, classes.userClose];
    if(userOpen){
        assignedProfile = [classes.UserProfile, classes.userOpen]
    }
    return(
        <>
            <div className={assignedProfile.join(" ")}>
                <div className={classes.UserProfile_header}>
                    <p onClick={userClose}><FaTimes /></p>
                    <h5>Profile</h5>
                    <p><MdOutlineEdit /></p>
                </div>
                <div className={classes.UserProfile_body}>
                    <img src={profilepic.profile} alt="userprofile" />
                </div>
                <div className={classes.UserProfile_info}>
                    <div className={classes.UserProfile_info_data}>
                        <p><MdOutlinePhone /></p>
                        <div className={classes.UserProfile_info_data_bio}>
                            <h5>099888434535</h5>
                            <h6>Phone</h6>
                        </div>
                    </div>
                </div>
                <div className={classes.UserProfile_info}>
                    <div className={classes.UserProfile_info_data}>
                        <p>@</p>
                        <div className={classes.UserProfile_info_data_bio}>
                            <h5>Alliendeveloper</h5>
                            <h6>Username</h6>
                        </div>
                    </div>
                </div>
                <div className={classes.UserProfile_info}>
                    <div className={classes.UserProfile_info_data}>
                        <p><IoMdNotificationsOutline /></p>
                        <div className={classes.UserProfile_info_data_bio}>
                            <h5>Notification</h5>
                            
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
}
export default UserProfile;
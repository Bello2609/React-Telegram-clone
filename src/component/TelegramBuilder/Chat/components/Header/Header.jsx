import React, { useState } from "react";
import classes from "./Header.module.css";
import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import OptionBtn  from "../OptionBtn/OptionBtn";
import Search from "../Search/Search";
import * as profile from "../../../../Images/Images";
import UserProfile from "../UserProfile/UserProfile";

const Header = ()=>{
    const [ open, setOpen ] = useState(false); //option btn
    const [ isOpen, setIsOpen ] =  useState(false); //search
    const [ userOpen, setUserOpen ]  = useState(false); //userprofile

   let assignedClasses = [classes.chat_header, classes.closeStyle];
   if(isOpen){
        assignedClasses = [classes.chat_header, classes.openStyle];
   }
    return(
        <>
            <div className={assignedClasses.join(" ")}>
                <div className={classes.chat_header_info}>
                    <img src={profile.profile} alt="the is my profile" />
                    <div className={classes.chat_header_info_info} onClick={()=>setUserOpen(true)}>
                        <h5>Adigun</h5>
                        <p>online</p>
                    </div>
                </div>
                <div className={classes.chat_header_icon}>
                    <p onClick={()=>{setIsOpen(true)}}><AiOutlineSearch /></p>  
                    <p onClick={()=>setOpen(!open)}><FaEllipsisV /></p>
                </div>
                <OptionBtn isOpen={open}/>
            </div>
            <Search open={isOpen} close={()=>setIsOpen(false)} />
            <UserProfile userOpen={userOpen} userClose={()=>setUserOpen(false)}/>
        </>
    );
}
export default Header;
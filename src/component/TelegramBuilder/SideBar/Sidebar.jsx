import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import SideDrawer from "../../UI/SideDrawer/SideDrawer";
import Contact from "../../UI/Contact/Contact";
import contactData from "../../../data/contact";
import CreateButton from "../../UI/CreateButton/CreateButton";
import CreateButtonOption from "../../UI/CreateButtonOption/CreateButtonOption";

const Sidebar = ()=>{
    const [ onOpen, setOpen ] = useState(false);
    const [ optionOpen, setOptionOpen ] = useState(false);
    return(
        
            <div className={classes.Sidebar}>
                
                <div className={classes.Sidebar_header}>
                    <div className={classes.hamburger} onClick={()=>setOpen(!onOpen)} >
                        <p><FaBars /></p>
                    </div>
                    <div className={classes.Sidebar_input}>
                        <p><BiSearchAlt2 /></p>
                        <input type="text" name="search" placeholder="Search" />
                    </div>
                </div>
                <div className={classes.Sidebar_list}>
                    {contactData.map(user=>(
                        <Contact key={user.id} contact={user} />
                    ))}
                    <CreateButton optionIsClick={()=>setOptionOpen(!optionOpen)} />
                </div>
                <CreateButtonOption optionOpen={optionOpen} />
                <SideDrawer onOpen={onOpen} />
            </div>
        
    );
}
export default Sidebar;
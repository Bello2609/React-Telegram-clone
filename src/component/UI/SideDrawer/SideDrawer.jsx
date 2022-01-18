import React from "react";
import classes from "./SideDrawer.module.css";
import { FaRegBookmark, FaRegUser } from "react-icons/fa"
import { BiArchiveIn } from "react-icons/bi";
import { FiSettings } from 'react-icons/fi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { MdAnimation } from "react-icons/md";
import { GiHelp } from "react-icons/gi";
import { IoMdBug } from "react-icons/io";

const SideDrawer = ({ onOpen })=>{
    return (
        onOpen ?
         <div className={classes.sideDraw}>
            <div className={classes.sideDrawer}>
                <div className={classes.sideDraw_list}>
                    <p><FaRegBookmark /></p>
                    <h5>Saved Messages</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><BiArchiveIn /></p>
                    <h5>Archived Chats</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><FaRegUser /></p>
                    <h5>Contacts</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><FiSettings /></p>
                    <h5>Setting</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><BsMoonStarsFill /></p>
                    <h5>Dark Mode</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><MdAnimation /></p>
                    <h5>Animation</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><GiHelp /></p>
                    <h5>Telegram Features</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p><IoMdBug /></p>
                    <h5>Report bug</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p>z</p>
                    <h5>Switch to z Version</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <p>W</p>
                    <h5>Switch to old Version</h5>
                </div>
                <div className={classes.sideDraw_list}>
                    <h5>Telegram webK alpha 1.0.0 (50)</h5>
                </div>
            </div>
           
        </div> : null
    );
}
export default SideDrawer;
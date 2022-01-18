import React from "react";
import classes from "./TelegramBuilder.module.css";
import Sidebar from "./SideBar/Sidebar";
import Chat from "./Chat/Chat";
// import { Route } from "react-router-dom";
const TelegramBuilder = ()=>{
    return(
        <div className={classes.TelegramBuilder}>
            <Sidebar />
            {/* <Route path="/chat/:id" component={Chat} /> */}
            <Chat />
        </div>
    );
}
export default TelegramBuilder;
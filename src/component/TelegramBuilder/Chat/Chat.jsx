import React from "react";
import classes from "./Chat.module.css";
import Header from "./components/Header/Header";
import ChatBody from "./components/ChatBody/ChatBody";
const Chat = ()=>{
    return(
        <>
            <div className={classes.Chat}>
                <Header />
                <ChatBody />
            </div>
        </>
    );
}
export default Chat;
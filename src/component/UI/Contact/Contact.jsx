import React from "react";
import classes from "./Contact.module.css";
import { Link } from "react-router-dom";
const Contact = ({contact})=>{
    // const getLastMessage = ()=>{
    //     const content_messages = Object.keys(contact.messages);
    //     const lastMessage = content_messages[content_messages.length - 1];
    //     const lastSendMessages = lastMessage.message_content;
    //     return lastSendMessages;
    // }
    return (
        <>
            {/* <Link to="/chat/:id"> */}
                <span className={classes.userContact_list}>
                    <img src={contact.profile_picture} alt="profile" />
                    <div className={classes.userContact_leftSide}>
                        <span className={classes.userContact_header}>
                            <h5>{contact.telegram_name}</h5>
                            <p>02:45pm</p>
                        </span>
                        <span className={classes.userContact_footer}>
                            {/* <p>{getLastMessage()}</p> */}
                            <p>23</p>
                        </span>
                    </div>
                </span>
            {/* </Link> */}
        </>
    );
}
export default Contact;
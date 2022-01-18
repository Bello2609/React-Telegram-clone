import React from "react";
import classes from "./ChatBody.module.css";
import ChatInput from "../ChatInput/ChatInput"; 
const ChatBody = ()=>{
    return(
        <>
            <div className={classes.chat_body}>
                <div className={classes.chat_inner_body}>
                    <div className={classes.message_time}>
                        <span>04/01/2021</span>
                    </div>
                    <div className={classes.sender_message}>
                        <span><p>hello, how are you doing dsjkfsjkf sjkdfsjkdwer weweklrjwekrjwkrjwkel jksdfjskdflaks sdjfsjdfjk</p></span>
                    </div>
                    <div className={classes.receiver_message}>
                        <span><p>i am fine sdfjnsjkfsjk sdfnsdjkfsf sjkdfsjkdfks sdfjsfk sdfjsdfjskd sjkdfnsdiucoewqa sfjowertuteur</p></span>
                    </div>
                    <div className={classes.sender_message}>
                        <span><p>hello, how are you doing dsjkfsjkf sjkdfsjkdwer weweklrjwekrjwkrjwkel jksdfjskdflaks sdjfsjdfjk</p></span>
                    </div>
                    <div className={classes.receiver_message}>
                        <span><p>i am fine sdfjnsjkfsjk sdfnsdjkfsf sjkdfsjkdfks sdfjsfk sdfjsdfjskd sjkdfnsdiucoewqa sfjowertuteur</p></span>
                    </div>
                    <div className={classes.sender_message}>
                        <span><p>hello, how are you doing dsjkfsjkf sjkdfsjkdwer weweklrjwekrjwkrjwkel jksdfjskdflaks sdjfsjdfjk</p></span>
                    </div>
                    <div className={classes.receiver_message}>
                        <span><p>i am fine sdfjnsjkfsjk sdfnsdjkfsf sjkdfsjkdfks sdfjsfk sdfjsdfjskd sjkdfnsdiucoewqa sfjowertuteur</p></span>
                    </div>
                </div>
                <ChatInput />
            </div>
        </>
    );
}
export default ChatBody;
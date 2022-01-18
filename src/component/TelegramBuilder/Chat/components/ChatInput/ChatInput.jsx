import React,{useState} from "react";
import classes from "./ChatInput.module.css";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { GrMicrophone } from 'react-icons/gr';
import { IoMdSend } from "react-icons/io"
const ChatInput = ()=>{
    const [ click, setClick ] = useState(false);
    const [ inputValue, setInputValue ] = useState("")
    const handleInput = (e)=>{
        setClick(true);
        setInputValue(e.target.value);
    }
    let icon = (
        <div className={classes.chat_send}>
            <p style={{
                color: "#aaaaaa"   
            }}><GrMicrophone /></p> 
        </div>
    )
    if(click && inputValue){
        icon = (
            <div className={classes.chat_send}>
                <p style={{
                    color: "#8774E1"
                    }}><IoMdSend /></p> 
            </div>
        )
    }
    return(
        <>
            <div className={classes.chat_input}>
                <div className={classes.chat_input_element}>
                    <p><BsEmojiSmile /></p>
                    <input type="text" name="" id="" placeholder="message" onChange={handleInput} value={inputValue} />
                    <p><ImAttachment /></p>
                </div>
               {icon}
            </div>

        </>
    );
}
export default ChatInput;
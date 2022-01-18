import React from "react";
import classes from "./K.module.css";
import Qrcode from "../Qrcode/Qrcode";
import SignIn from "../SignIn/SignIn";
import Confirm from "../Confirmation/Confirm";
import Telegram from "../../container/Telegram";
import { useStep, useForm } from "react-hooks-helper";
const steps = [
    {id: "qrcode"},
    {id: "phone"},
    {id: "confirmation"},
    {id: "telegram board"}

]
const defaultData = {
    phoneNumber: ""
}
const K = ()=>{
    const [formData, setForm] = useForm(defaultData)
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    });
    const props = { formData, setForm, navigation };
    console.log(navigation);
    switch(step.id){
        case "qrcode":
            return <Qrcode {...props} />;
        case "phone":
            return <SignIn {...props} />;
        case "confirmation":
                return <Confirm {...props} />;
        case "telegram board":
            return <Telegram {...props} />;
    }
    return (
        <div className={classes.k}>
           <h1>hi you have a test message</h1>
        </div>
    );
}
export default K;
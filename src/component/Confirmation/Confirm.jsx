import React from "react";
import classes from "./Confirm.module.css";
const Confirm = ({formData, navigation})=>{
    const { phoneNumber } = formData;
    return(
        <div className={classes.Confirm}>
            <div className={classes.confirm_confirm}>
                <h3>{phoneNumber}</h3>
                <p>We have sent you a message in Telegram with the code.</p>
                <div className={classes.google_form}>
                <form className={classes.form}>
                    <input type="number" name="number" id="number" className={classes.input} />
                    <button onClick={()=>navigation.next()}className={classes.button2}>NEXT</button>
                </form>
                </div>
            </div>
        </div>
    );
}
export default Confirm;
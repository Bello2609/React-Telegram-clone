import React from "react";
import classes from "./Qrcode.module.css";
import * as images from "../Images/Images"
const Qrcode = ({navigation})=>(
    <div className={classes.qrcode}>
        <div className={classes.code}>
            <img src={images.qrcode} alt="code" />
            <h5>Log in to Telegram by QR Code</h5>
            <ol type="1">
                <li>Open Telegram on your phone</li>
                <li>Go to Settings {">"} Devices {">"} Scan QR</li>
                <li>Point your phone at this screen to confirm login</li>
            </ol>
            <button onClick={()=> navigation.next()}>LOG IN BY PHONE NUMBER</button>
        </div>
    </div>
)
export default Qrcode;
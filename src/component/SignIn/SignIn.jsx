import React, {useEffect, useState} from "react";
import classes from "./SignIn.module.css";
import axios from "axios";
import * as images from "../Images/Images";
const SignIn = ({navigation, formData, setForm})=>{
    
    const [isLoading, setLoading] = useState(false);
    const [countrys, setCountrys] = useState([]);
    const [select, setSelect] = useState("select country");
    useEffect(()=>{
        axios.get("https://restcountries.com/v2/all").then(res=>{
            setLoading(true);
            console.log("complete");
            let response = res.data.map(country=>{
                return country.name;
            })
            setCountrys(response);
        }).catch(err=>{
            console.log(err);
        });
    }, []);
    const { phoneNumber } = formData;
    return (
        <div className={classes.Signin}>
            <div className={classes.Signin_form}>
                <img src={images.logo} alt="" />
                <h4>Sign in to Telegram</h4>
                <p>Please confirm your country and
                enter your phone number.</p>
                <form className={classes.form}>
                    <div className={classes.google_form}>
                        <select className={classes.input} onChange={(e)=>{setSelect(e.target.value)}} value={select}>
                            {countrys.map(country=> <option key={country} value={country}>{country}</option>)}
                        </select>
                        <label for="country" className={classes.label}>Country</label>
                    </div>
                    <div className={classes.google_form}>
                        <input type="tel" onChange={setForm} name="phoneNumber" value={phoneNumber} className={classes.input} autoComplete="off" />
                        <label for="country" className={classes.label}>Phone Number</label>
                    </div>
                    <button className={classes.button1}><input type="checkbox" /> keep me signed in</button>
                    <button className={classes.button2} onClick={ ()=> navigation.next()}>NEXT</button>
                    <button className={classes.button3} onClick={ ()=> navigation.previous()}>LOG IN BY QR CODE</button>
                </form>
            </div>
        </div>
    )
}
export default SignIn;
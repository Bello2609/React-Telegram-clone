import React, {useState} from "react";
import classes from "./Search.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = ({open, close})=>{
    let assignedSearch = [classes.Search, classes.closeSearch];
    if(open){
        assignedSearch = [classes.Search, classes.openSearch];
    }
    return(
       
        <>
            <div className={assignedSearch.join(" ")}>
                <div className={classes.Search_header}>
                    <p><AiOutlineArrowLeft onClick={close} /></p>
                    <div className={classes.Search_input}>
                        <p><BiSearchAlt2 /></p>
                        <input type="text" name="search" placeholder="Search" />
                    </div>
                    <p><FiCalendar /></p>
                </div>
            </div>
        </>
       
    );
}
export default Search;
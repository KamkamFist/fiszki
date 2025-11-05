import {useState} from "react";
import "./fiszki.css";
import Karta from "./karta.jsx";

function fiszki({data}) {
  
    const current = Math.floor(Math.random() * data.length);

    return (
        <>
        <div id="fiszkaWall">
        
        <Karta data={data} id={current}/>
         
        </div>
        </>
    )
}

export default fiszki
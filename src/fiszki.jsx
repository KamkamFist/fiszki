import {useState} from "react";
import "./fiszki.css";
import Karta from "./karta.jsx";

function fiszki({data}) {
  

    return (
        <>
        <div id="fiszkaWall">
        {data.map((item) =>
        <Karta data={item}/>
      )}    
        </div>
        </>
    )
}

export default fiszki
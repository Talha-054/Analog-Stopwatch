import React, {useRef} from 'react'
import "./clock.css"
import { useEffect } from 'react';
import {bgImg, setImg} from '../global';

function Clock({identity}) {

    let layout = useRef(null)
    let code;

    if (identity === "") code = "B0nTx2lI";
    if (identity === "2") code = "B1rPzohg";
    if (identity === "4") code = "aSZAo7Dq";
    if (identity === "5") code = "CeL6Z8VG";
    if (identity === "6") code = "DDrPY0SH";
    if (identity === "7") code = "BuHx1dpQ";
    if (identity === "8") code = "CaUnrmit";
    if (identity === "9") code = "D3J5orwv";
    if (identity === "10") code = "Sslw0gnc";
    if (identity === "11") code = "BnRAx4TQ";
    if (identity === "12") code = "DyAhc22Y";
   

    // useEffect(()=>{
    if(layout.current){
        layout.current.style.backgroundImage = `url(/assets/clock${identity}-${code}.png)`;
        let path = `url(/assets/clock${identity}-${code}.png)`;
        setImg(path)
        
    }
    console.log("done")
    console.log(identity)
    // },[identity])
   

    return (
        <>
            <div className="clock-bg-container">
                <div ref={layout}  className="sample" ></div>
            </div>
        </>
    )
}

export default Clock

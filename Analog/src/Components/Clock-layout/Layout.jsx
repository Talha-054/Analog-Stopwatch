import React, { useState } from 'react';
import "./layout.css";
import { useRef } from 'react';

import Analog from '../Analog/Analog';
import Clock from '../Clock-bg/Clock';

function Layout() {



    let layoutIcons = useRef(null);
    let layoutButton = useRef(null)

    let [bgNum, setbgNum] = useState(null)

    



     function changeLayout(e){
        setbgNum(e.target.id);
        console.log("clicked")
        console.log(bgNum)
    
        layoutButton.current.classList.remove("hide");
        layoutIcons.current.classList.remove("unhide");

        layoutButton.current.classList.add("unhide");
        layoutIcons.current.classList.add("hide");
        
    }

    function toogleLayout (){
        layoutButton.current.classList.remove("unhide");
        layoutIcons.current.classList.remove("hide");

        layoutButton.current.classList.add("hide");
        layoutIcons.current.classList.add("unhide");
        

        console.log(layoutIcons.current, layoutButton.current )

    }








    return (
        <>
            <div className='container'>
    
                <div ref={layoutIcons} className="clock-layout-area">
                        <div onClick={(e)=> changeLayout(e)}   id="" className="box box1"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="2" className="box box2"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="4" className="box box3"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="5" className="box box4"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="6" className="box box5"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="7" className="box box6"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="8" className="box box7"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="9" className="box box8"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="10" className="box box9"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="11" className="box box10"></div>
                        <div onClick={(e)=> changeLayout(e)}   id="12" className="box box11"></div>
                </div>
    
                <div ref={layoutButton} className="clock-layout-button-container">
                    <button onClick={toogleLayout} className="layout-button">Change Layout</button>
                </div>

                <Clock identity = {bgNum} />


            </div>
        </>
    )
}

export default Layout;

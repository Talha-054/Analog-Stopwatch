import { useState, useRef, useEffect, useContext } from "react";
import "./analog.css"
import Clock from "../Clock-bg/Clock";
import {bgImg, setImg} from "../global";



function Analog (){

   
    let [seconds, updateSeconds] = useState(new Date().getSeconds());
    let [minutes, updateMinutes] = useState(new Date().getMinutes());
    let [hours, updateHours] = useState(new Date().getHours());

    let [clock, updateClock] = useState(true);
    
    

    let secHand = useRef(null);
    let miliSecHand = useRef(null);
    let minHand = useRef(null);
    let layout = useRef(null)
    // let layoutButton = useRef(null)
    let buttonArea = useRef(null);
    // let layoutIcons = useRef(null);

    
    let isAnimating = false;
    let animations = false;

   

    let timeId;
  
    
    useEffect(()=>{
        console.log("rendereddd")
    })
   

    useEffect (()=>{

        layout.current.style.backgroundImage = bgImg();

        timeId = setInterval (()=>{

            updateHours(new Date().getHours());
            updateMinutes(new Date().getMinutes());
            updateSeconds(new Date().getSeconds());

        },1000)
        console.log("rendered")

        return ()=>{
            clearInterval(timeId);
        }

    },[])

    

    function start (){
        console.log(minutes)
        if (!animations){
            miliSecHand.current.classList.add("mili-sec-hand-animation");
            secHand.current.classList.add("second-hand-animation");
            minHand.current.classList.add("minute-hand-animation");
            animations = true 
            
        }


        miliSecHand.current.classList.remove("pause-animation");
        secHand.current.classList.remove("pause-animation");
        minHand.current.classList.remove("pause-animation");
    
        miliSecHand.current.classList.add("play-animation");
        secHand.current.classList.add("play-animation");
        minHand.current.classList.add("play-animation");
        isAnimating = true;
        
    }



    function stop (){

        miliSecHand.current.classList.remove("play-animation");
        secHand.current.classList.remove("play-animation");
        minHand.current.classList.remove("play-animation");

        miliSecHand.current.classList.add("pause-animation");
        secHand.current.classList.add("pause-animation");
        minHand.current.classList.add("pause-animation");
        isAnimating = false;
    }



    function reset (){

        isAnimating = false;

        miliSecHand.current.classList.remove("mili-sec-hand-animation");
        secHand.current.classList.remove("second-hand-animation");
        minHand.current.classList.remove("minute-hand-animation");
        animations = false;
    }



    function time (){

        isAnimating = false;
        clock ? null : updateClock(!clock);

        miliSecHand.current.classList.remove("mili-sec-hand-animation");
        secHand.current.classList.remove("second-hand-animation");
        minHand.current.classList.remove("minute-hand-animation");
        animations = false;
        
        buttonArea.current.classList.remove("unhide");
        buttonArea.current.classList.add("hide"); 
        
        
    }

    function Stopwatch(){
        clock ? updateClock(!updateClock) : null;
        console.log(clock)
        isAnimating = false;

        miliSecHand.current.classList.remove("mili-sec-hand-animation");
        secHand.current.classList.remove("second-hand-animation");
        minHand.current.classList.remove("minute-hand-animation");
        animations = false;

        buttonArea.current.classList.remove("hide");
        buttonArea.current.classList.add("unhide"); 
        
    }



    // function changeLayout(e){
    //     let num = e.target.id;
    //     layout.current.style.backgroundImage = `url(/src/Components/Digital-Stopwatch/assets/images/clock/clock${num}.png)`;
    //     console.log("clicked")
    
    //     layoutButton.current.classList.remove("hide");
    //     layoutIcons.current.classList.remove("unhide");

    //     layoutButton.current.classList.add("unhide");
    //     layoutIcons.current.classList.add("hide");
        
    // }

    // function toogleLayout (){
    //     layoutButton.current.classList.remove("unhide");
    //     layoutIcons.current.classList.remove("hide");

    //     layoutButton.current.classList.add("hide");
    //     layoutIcons.current.classList.add("unhide");
        

    //     console.log(layoutIcons.current, layoutButton.current )

    // }

    
    

// 1 deg = 0.16667s   1sec = 6deg       (seconds)    360 = 60

// 1 deg = 10 sec     1sec = 0.1deg        (minutes)      360 = 60*60 = 3600

// 1deg =  600sec     1sec = 0.008334    hour()         360 = 12*60*60 = 43200







    return(
        <>
            <div className="dc-main-container">

                

                <div className="dc-container">


                    <div ref={layout} className="dc" >
                        <div  
                            style={clock ? {transform: `rotate(${(minutes*6)+(seconds * 0.1)}deg)`} : null}
                            ref={secHand}  
                            className="second-hand pause-animation "></div>
                        <div  
                             style={clock ? {transform: `rotate(${(hours*30)+(minutes * 0.5)}deg)`} : null}
                            ref={minHand} 
                            className="minute-hand pause-animation"></div>
                        <div
                             style={clock ? {transform: `rotate(${seconds*6}deg)`} : null}
                             ref={miliSecHand} 
                             className="mili-sec-hand pause-animation">
                        </div>
                    </div>
                    
                </div>



                <div ref={buttonArea} className="button-area hide">
                    <div className="start-button-container">
                        <button onClick={start} className="start-button">START</button>
                    </div>

                    <div className="reset-button-container">
                        <button onClick={reset} className="reset-button">RESET</button>
                    </div>

                    <div className="stop-button-container">
                        <button onClick={stop}  className="stop-button">STOP</button>
                    </div>

                </div>

                <div className="choice-area">
                    <button onClick={Stopwatch} className="choice">Stopwatch</button>
                    <button onClick={time} className="choice">Time</button>
                </div>


                {/* <div ref={layoutIcons} className="clock-layout-area">
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
                </div> */}


               
            </div>
        </>
    );

}
export default Analog;
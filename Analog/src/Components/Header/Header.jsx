import React, {useRef} from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';

function Header() {



    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="options">
                        <ul>

                            <NavLink id='heading' to={"/analog"} className={({isActive})=>`navlink ${isActive? "red":"black"}`}><li>Analog</li></NavLink>

                            <NavLink id='heading' to={"/custom"}  className={({isActive})=>`navlink ${isActive? "red":"black"}`}><li>Customization</li></NavLink>
                        
                        
                            <NavLink id='heading' to={"/digital"}  className={({isActive})=>`navlink ${isActive? "red":"black"}`}><li>Digital</li></NavLink>

                        </ul>
                    </div>
                    <div className="member">

                        <div className="light"></div>
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;

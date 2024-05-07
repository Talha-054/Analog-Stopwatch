import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../Header/Header';



function Template() {
    return (
        <>
            <Header/>
            <Outlet/>
            
        </>
    )
}

export default Template

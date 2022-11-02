
import '../style/Heder.css'

import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import menu from '../JPG_Heder/menu.png'
import cossak from '../JPG_Heder/kozak.png'


const Header = (props) => {
    const [isActive, setIsActive] = useState("")

    // const toggleVisibilitycounter = () => {
    //     setIsActive(prevstate => !prevstate)

    const handleScroll = (event) => {
        console.log('window.scrollY', window.scrollY);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            const number = window.scrollY
            // const number2= ""
            // console.log(number)
            if (number !== 0) {
                setIsActive(isActive => true)
                
            } else {
                setIsActive(isActive => false)

                 
               
            }

            // console.log(number2)

        }, 200)



        // window.addEventListener('scroll', handleScroll);

        // return ()=>{
        //     window.removeEventListener('scroll', handleScroll);
        // }
        
        return () => clearInterval(interval) 
    }, [])



    // if (isActive !== 0) {
    //     let style = {
    //         color: "green"
    //     }
    // } else {
    //     let style = {
    //         color: "blue"
    //     }
    // }








    return (

        <div className={isActive ? "heder_div" : "heder_div_null"} >



            <img src={menu} alt="menu" className="heder_button" onClick={props.isActive2}></img>



            {/* <Routes>
                {/* <Route path="/" end element={<Img1></Img1>} /> */}
            {/* </Routes> */}
            <div className="forName">
            <img src={cossak} alt="Cossak" className="heder_cossak"/>
            <div className={isActive ? "Myname_isActiv" : "Myname"}> Michał Kozak </div>
            </div>
        </div>

    )

}




export default Header
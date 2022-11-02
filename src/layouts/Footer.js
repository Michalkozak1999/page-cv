import React, {} from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "../style/Footer.css"
const Footer = () => {


    const Home = () => {
        return (
            <div className="footer_home">
            <span> Jesteś na  stronie głównej</span>
            </div>
        )
    }
    const Home2 = () => {
        const parsm = useParams()
      
        return (
            <div className="footer_id">
             <span> Jesteś na {parsm.id} </span>
            </div>
        )
    }
    
        
        return (
            <div className="footer">
            <Routes>
                <Route path='/' end="true" element={<Home/>}></Route>
                <Route path='/:id' end="true" element={<Home2/>}></Route>
            </Routes>
             
        </div>
        )
    }


export default Footer
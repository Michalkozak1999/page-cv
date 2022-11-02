import React from "react";
import "../style/MinGame.css"
// import lastchance from "./strona_pingpong/pingpong.js"
import pingponggame from "../JPG/Ping_pong.png"
import wisielec from '../JPG/wisielec.png'
import skoczek from '../JPG/skoczek.PNG'

import { Link, NavLink, Route, Routes, Navigate } from "react-router-dom";


const MinGame = () => {
    const page = [{ id: 1, path: "/https://devpebe.com/2019/11/13/tworzenie-podstron-z-react-router-v5-kurs-react-cz-8/", opis: "MY" }]


    // const mapnavlink = page.map(onepage => {
    //     return (
    //         <div key ={ onepage.id}>
    //         <NavLink  to={onepage.path}>

    //         {onepage.opis}
    //         </NavLink>
    //         </div>


    //     )
    // })



    return (
        <div className="braiding_mingame">

            <div className="mingame_1">
                <h4>Ping Pong</h4>

                <a href="strona_pingpong/pingpong.html"><img src={pingponggame} alt="Ping_Pong"></img></a>


                {/* <Routes>
                    <Route path='/https://devpebe.com/2019/11/13/tworzenie-podstron-z-react-router-v5-kurs-react-cz-8/' element={() => window.location = 'https://devpebe.com/2019/11/13/tworzenie-podstron-z-react-router-v5-kurs-react-cz-8/'} />
                </Routes> */}


                {/* {mapnavlink} */}


                {/* <Link to="https://devpebe.com/2019/11/13/tworzenie-podstron-z-react-router-v5-kurs-react-cz-8/"></Link> */}

            </div>
            <div className="mingame_2">
                <h4>Skoczek</h4>

                <a href="skaczaca_pilka/skaczaca_pilka.html"><img src={skoczek} alt="Ping_Pong"></img></a>

            </div>
            <div className="mingame_3"> <h4>Wisielec</h4>
                <a href="wisielec/wisielec.html"><img src={wisielec} alt="Ping_Pong"></img></a>
            </div>
            {/* <div className="project_4">
            4
        </div> */}



        </div>
    )
}
export default MinGame
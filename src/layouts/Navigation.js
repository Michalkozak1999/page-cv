import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.css"
import hause from '../JPG_Heder/hause.png'
import dolar from '../JPG_Heder/dolar.png'
import project from '../JPG_Heder/project.png'
import game from '../JPG_Heder/game.png'
import contact from '../JPG_Heder/contact.png'

const list = [
    { name: "Start", path: "/", end: true, active: false, emoji: hause },
    { name: "Finanse", path: "/finanse", active: false, emoji: dolar },
    { name: "Projekty", path: "/project", active: false, emoji: project },
    { name: "MiniGame", path: "/mingame", active: false, emoji: game },
    // { name: "Kontakt", path: "/contact", active: false, emoji: contact },
]



const Navigation = (props) => {

    let activeStyle = {

        color: "green"


    }
    let nonactiveStyle = {
        color: "rgb(155, 226, 40)"
    }

    const changebackground =(e)=>{
e.target.style.backGround ="red"
    }


    const menu = list.map(onepage => {
        // const [isShow, setIsShow] = useState(false);
        return (
            
            
            <li className="listyle" key={onepage.name}>
                <NavLink
            //    onMouseEnter ={()=> setIsShow(true) }
            //    onMouseLeave ={()=> setIsShow(false) }
                    to={onepage.path}
                    end={onepage.end ? onepage.end : false}
                    style={({ isActive }) => isActive ? activeStyle : nonactiveStyle
                    } >

                        <div className="emojiforNavigation" >
                                <img style={{}} src={onepage.emoji}/>
                        </div>
                    {onepage.name}


                </NavLink>
            </li>
           
        )
    })



    return (
        <div >
            <div className={props.isActive ? "allnavdone" : "allnav"}></div>
            <nav className={props.isActive ? "navstyle": "navstyledone"}>
                <ul>
                    {menu}

                </ul>

                <div className="kontakt"> <h2>Kontakt</h2> 
              <p>e-mail: michal.kozak.1999@interia.pl</p>
              <p>telefon: <br></br>782 217 219</p>
              </div>

              
             
            </nav>
            
        </div>
    )
}

export default Navigation
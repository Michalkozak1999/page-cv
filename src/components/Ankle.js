import React from "react";
import '../style/Ankle.css'
import css from "../JPG/css.png"
import js from '../JPG/Js.png'
import html from '../JPG/html.png'
import react from '../JPG/react.png'

const anklediv = [
{id: 1, name: " wall front", text: "1", img: css},
{id: 2, name: " wall right", text: "2", img: js},
{id: 3, name: " wall left", text: "3", img: html},
{id: 4, name: " wall back",text: "4", img: react},
]


const Ankle = () => {
    const myankle = anklediv.map(onepage => {
        return(
            <div key={onepage.id} className={onepage.name}> <img src={onepage.img} alt={onepage.text}/></div>
        )
    })
    return (
        <div className="useAnkle">


        <div className="ankle">
            
            {myankle}
            
            </div>
        
        
        </div>
    )
}
export default Ankle
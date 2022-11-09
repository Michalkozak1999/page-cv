import React, { useEffect, useState } from "react";
import '../style/Description.css'


import Mycharacter from "./Mycharacter";
import Ankle from "../components/Ankle";
import Hobby from "./Hobby";



import img1 from "../MyJPG/myjpg.jpg"
import img2 from "../MyJPG/myjpg2.jpg"
import img3 from "../MyJPG/myjpg3.jpg"


import JS from '../JPG/jstech.png'
import css from '../JPG/csstech.png'
import html from '../JPG/htmltech.png'
import react from '../JPG/reacttech.png'
import sass from '../JPG/sasstech.png'


const description = [
    { id: 1, opis: "Technologie", text: "", technologies: JS, css: css, html: html, react: react, sass: sass, ankel: true },
    // { id: 2, opis: "Zainteresowania", text: "jestem studentem 5 roku Finansów i rachunkowości chcialem spróbowac swoich sił w programowaniu. Większość wiedzy jakiej pozyskałem pochodziła z rónych kursów internetowych organizowanych  np. na Udemy lub CodersLabs" }

]


const myphoto = [{ id: 0, img: img1, opis: "ja" }, { id: 1, img: img2, opis: "ja1" }, { id: 2, img: img3, opis: "ja2" }]

const Descriptions = () => {
    const [number, setnumber] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            // const math = Math.floor(Math.random() * 3)


            setnumber(number => number + 1)

        }, 5000)
        return () => clearInterval(interval)
    }, [])


    if (number > 2) {
        setnumber(number => 0)
    }



    const descriptionnow = description.map(oneinfo => {
        return (
            <div className="descriptionnow_flex" key={oneinfo.id}>
                <div className="description_flex_ankel">
                    <h1>{oneinfo.opis}</h1>
                    {oneinfo.ankel ? <Ankle /> : null}

                </div>
                <hr></hr>
                {oneinfo.text}


                <div className="desciptionflex_img">


                    <img src={oneinfo.css}></img>
                    <img src={oneinfo.technologies}></img>
                    <img src={oneinfo.html}></img>
                    <img src={oneinfo.react}></img>
                    <img src={oneinfo.sass}></img>
                </div>


            </div>
        )
    })

    const newData = [...myphoto]
    // const newmyphot = [...myphoto]
    const filterphot = newData.filter(onephoto => onephoto.id === number)
    const mapfilter = filterphot.map(one => one.img)

    // const filter = newmyphot



    return (
        <div>
            <div className="mydescription">

                <Mycharacter />
                <div
                    className="mydescriptionimg"> <img src={mapfilter} />  </div>

            </div>
            {description.text}
            {descriptionnow}

            <h1 className="h1hobby">Zainteresowania</h1>
            <hr></hr>

            <Hobby />
        </div>
    )
}

export default Descriptions
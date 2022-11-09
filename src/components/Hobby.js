import React from "react";
import "../style/Hobby.css"



import computer from '../myhobbysJpg/computer.png'
import rubik from '../myhobbysJpg/rubik.png'
import market from '../myhobbysJpg/market.png'
import adventure from '../myhobbysJpg/adventure.png'

const Hobby = () => {
    return (
        <div className="contenerhobby">
            <div className="hobbys_img">


                <div className="Rubik">
                    <h2>Kostka Rubika</h2>
                    <img src={rubik} alt="rubik" />
                </div>

                <div className="adventure">
                    <h2>Książki Przygodowe / Fantastyczno-naukowe</h2>
                    <img src={adventure} alt="rynek" />
                </div>

                <div className="computer">
                    <h2>Gry Komputerowe / Gry Planszowe</h2>
                    <img src={computer} alt="computer" />
                </div>

                <div className="market">
                    <h2>Rynek Kapitałowy</h2>
                    <img src={market} alt="rynek" />
                </div>




            </div>



        </div>
    )
}

export default Hobby
import '../style/Finanse.css'


import makler from '../JpgFinanse/makler.png'
import ekonomiczny from '../JpgFinanse/ekonomiczny.jpg'
import hochland from '../JpgFinanse/hochland.jpg'
import excel from '../JpgFinanse/excel.jpg'
import telzas from '../JpgFinanse/telzas.png'
import sap from '../JpgFinanse/sap.png'
import epicor from '../JpgFinanse/epicor.png'

const Finase = () => {
    return (
        <div className="finanse" >

            <div className="finanse_contener">


                <div className="studia">
                    Od 2021 roku jestem na studiach Magisterskich z Finansów i Rachunkowości Biznesu (specjalizacja inwestycje kapitałowe)
                    <img src={ekonomiczny} alt="ekonomiczny"
                        style={{ backgroundColor: "black" }}></img>

                </div>

                <div className="Hochland">
                    <div className="opishochland">
                        Od 14.03.2022 do chwili obecnej pracuje w Hochland Polska na stanaowisku "stażysta księgowy"
                    </div>
                    <img src={hochland} alt="hochland"></img>






                </div>



                <div className="abilities">
                    <h2> Nabyte umiejęstności:</h2>
                    <ul>
                        <li> <p>Obsługa Sap</p>
                            <img src={sap} alt="sap"></img>
                        </li>
                        <li>  <p> Excela (Analysis)</p>
                            <img src={excel} alt="excel"></img>
                        </li>
                    </ul>

                    <div>





                    </div>
                </div>


                <div className="telzas">Od 01.07.2021 do 14.08.2021 pracowałem w Telzas Polska jako "praktykant księgowy"
                    <img src={telzas} alt="telzas"></img>
                </div>
                <div className="abilities">
                    <h2> Nabyte umiejętnosci:</h2>

                    <div>

                        <img src={epicor} alt="epicor"></img>
                    </div>




                </div>
            </div>

            <div className="makler">W dniu 06.07.2021 uzyskałem Licencje Maklera Papierów wartościowych od Komisji Nadzoru Finansowego
                <img src={makler} alt="makler" />

            </div>






        </div>
    )
}


export default Finase
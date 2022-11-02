
import "../style/Mycharacter.css"
import mycharacter from '../JPG_Heder/Mycharacter.png'
const Mycharacter = () => {
    return (
        <div className="Mycharacter">
           <div className="Mycharacterflex"><img src={mycharacter}alt="mybook"/> <h1>O mnie</h1></div>
            <hr></hr>
            <p>Hej, nazywam się Michał i jestem studentem 5 roku Finansów i Rachunkowości na Uniwersytecie Ekonomicznym w Pozaniu.</p>

            <p> Od sierpnia 2021 roku w momencie uzyskania przed Komisją Nadzoru Finansowego Licencji Maklera Papierów Wartościowych nr 3393, uczę się programownia. </p>
            <p>  Głównie REACT, JS, HTML i CSS.</p>

            <hr></hr>
        </div>
    )
}

export default Mycharacter
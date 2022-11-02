
import './style/itsdone.css'

const ItsDoneList = (props) => {
    const date2 = new Date().toISOString().slice(0, 10)
    const filternonactive = props.alltask.filter(task => !task.active)
    const mapnonactive = filternonactive.map(task => {
        return (
            <div className="done" key={task.id}>{task.text} <div > Wykonane: {date2}</div></div>
        )
    })



    return (
        <div className="done-margin"> <hr></hr>

            <h2>Zrobione Zadania</h2>
            <div>
                
                {mapnonactive}
            </div>
        </div>
    )
}

export default ItsDoneList
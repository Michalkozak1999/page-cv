
import './style/todolist.css'

const ToDoList = (props) => {



    const filteractive = props.alltask.filter(task => task.active)

    const style = {
        color: "green"
    }

    const mapactive = filteractive.map(task => {
        return (
            <div key={task.id}>

                <div className="todotask">
                    <div>
                        <span style={task.important ? style : null}> {task.text}</span>  <br></br>
                        Rozpoczecie:    {task.date}
                    </div>
                    <div className="button">
                        <button onClick={() => props.changeactive(task.id)} >Zrobione</button>
                        <button onClick={() => props.delete(task.id)}>X</button>
                    </div>
                </div>



            </div>
        )
    })



    // const lenght2 = () => {
    //     if (filteractive.length = 0) {
    //        console.log("jest 0")
    //     }
    // }

    return (
        <div >

            <hr></hr>
            <div className="todobox">

                <h2>Do Zrobienia</h2>
                {filteractive.length > 0 ? mapactive : "brak zadań"}

                {/* {lenght2} */}
            </div>

        </div>
    )
}

export default ToDoList
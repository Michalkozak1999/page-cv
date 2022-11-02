import { useState } from "react"

import './style/addlist.css'

const AddList = (props) => {



    const [lenght, setlenght]= useState(true)

    const [value, setValue] = useState("")

    const date = new Date().toISOString()
    const datesplice = date.slice(0, 10)
    const [valuedate, setvaluedate] = useState(datesplice)

    const [checkbox, setCheckbox] = useState(false)


    const handlevaluechange = (e) => {
        setValue(e.target.value)
    }

    const handledate = (e) => {
        setvaluedate(e.target.value)
    }

    const handlechcecbox = (e) => {
        setCheckbox(e.target.checked)
    }

    const AddTask = () => {
        if(value.length>2){
            const add = props.addtask(value, valuedate, checkbox)
            if (add) {
                setValue("")
                setvaluedate(datesplice)
                setCheckbox(false)
                setlenght(true)
            }
        } else {
           setlenght(false)
        }
        
    }

   
    return (
        <div className="box">
            <div className="form">
                <label>
                    <p> Podaj zadanie</p>
                    <input type="text" placeholder="napisz co chcesz zrobić" value={value} onChange={handlevaluechange}></input>
                    {lenght ? "" : <p>Podaj przynajmniej 3 znaki</p>}
                </label>
                <label>
                    <p> Podaj datę rozpoczęcia</p>
                    <input type="date" value={valuedate} onChange={handledate} ></input>
                </label>
                <label className="checkbox">
                    Czy jest to dla ciebie ważne?
                    <input type="checkbox" checked={checkbox} onChange={handlechcecbox}></input>
                </label>

                <button  className="buttonadd" onClick={AddTask}>Dodaj</button>



            </div>
        </div>
    )
}

export default AddList
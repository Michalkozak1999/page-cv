import React, { Component } from "react"

import './style/App.css';

import ToDoList from "./ToDoList";
import AddList from "./AddList";
import ItsDoneList from "./ItsDoneList";

class App extends Component {
  counter = 3
  state = {
    task: [
      {
        id: 0,
        text: "text testowy 1",
        active: true,
        date: "16.10.2022",
        important: true,
      },
      {
        id: 1,
        text: "text testowy 2",
        active: true,
        date: "16.11.2022",
        important: false,
      },
    ]
  }


  handleClickActive = (id) => {
    console.log("działa" + id)
    const alltask = [...this.state.task]
    alltask.forEach(task => {


      if (task.id === id) {
        task.active = false
       
      }
      this.setState({
        task: alltask
      })
    })
  }

  handleClickDelete = (id) => {
    const newtask = [...this.state.task]
    const index = newtask.findIndex(task => task.id === id)
    newtask.splice(index, 1)
    this.setState({
      task: newtask
    })
  }

  AddTask = (text, date, important) => {

    const newtask = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
    }
    this.counter++

    this.setState(prevstate => ({
      task: [...prevstate.task, newtask]
    }))

    return true
  }



  render() {
    return (
      <div className="App">
        <AddList alltask={this.state.task} addtask={this.AddTask} />
        <ToDoList alltask={this.state.task} changeactive={this.handleClickActive} delete={this.handleClickDelete} />
        <ItsDoneList alltask={this.state.task} />
      </div>
    );
  }
}

export default App;

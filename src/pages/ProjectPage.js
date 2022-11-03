import React from "react";
import "../style/ProjectPage.css"

import todo from '../JPG/to_do_app.PNG'
import kalkulator from '../JPG/kalkulator.png'
import fetch from '../JPG/fetch.PNG'

const ProjectPage = () => {
    return (



        <div className="braiding_project">

            <div className="todo">
                <h4>Aplikacja To Do</h4>
                <a href="https://michalkozak1999.github.io/Aplication_to_do/">
                    <img src={todo} alt="todo"></img>
                </a>
            </div>



            <div className="fetch">
                <h4>Fetch</h4>
                <a href="https://michalkozak1999.github.io/Fetch_aplication/">
                    <img src={fetch} alt="fetch"></img>
                </a>
            </div>



            <div className="project_1">
                <h4>Kalkulator</h4>
                <a href="kalkulator/kalklulator.html">
                    <img src={kalkulator} alt=""></img>
                </a>
            </div>

            {/* <div className="project_4">
                4
            </div> */}



        </div>
    )
}

export default ProjectPage
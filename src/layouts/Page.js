import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import MinGame from "../pages/MinGame";
import Finase from "../pages/Finanse";
import Contact from "../pages/Contact";

const Pageall = () => {


    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/project" element={<ProjectPage/>}></Route>
            <Route path="/mingame" element={<MinGame/>}></Route>
            <Route path="/finanse" element={<Finase/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>


        </Routes>


        
    )
}
export default Pageall
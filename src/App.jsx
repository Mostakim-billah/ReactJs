import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Protfulio from "./Protfulio";
import Skill from "./Skill";
import Err from "./Err";
import {Switch,Route } from 'react-router-dom';
import Footer from "./Footer";
const App = () => {
    return(
        <>
        
            <Navbar />
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/protfulio" component = {Protfulio} />
                <Route exact path = "/skill" component = {Skill} />
                <Route exact component = {Err} />
            </Switch>
            <Footer />
        </>
    )
}
export default App;
import About from '../About/About'
import Contact from '../Contact/Contact'
import Portfolio from '../Portfolio/Portfolio'

import React from "react";
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";

function Navbar() {
    return (

        <div>
            <h1 className="title">Adam Aranha</h1>
            <nav>
                <NavLink to="/" className="nav"> ABOUT </NavLink>
                <NavLink to="portfolio" className="nav"> PORTFOLIO </NavLink>
                <NavLink to="/contact" className="nav"> CONTACT </NavLink>
            </nav>

            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>

    );
}

export default Navbar
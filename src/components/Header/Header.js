import React from 'react'
import { NavLink, BrowserRouter } from "react-router-dom";
import resume from '../../assets/resume.pdf'
import './Header.css'

function Header() {
    return (

        <header class="container-fluid">
            <div class="row pt-3">
                <div class="col">
                    <nav class="nav">
                        <NavLink to="/about" className="navbar-brand name mx-2">
                            <h3>Adam Aranha</h3>
                        </NavLink>
                    </nav>
                </div>
                <div class="col">

                    <ul class="nav justify-content-end mx-5">


                        <li class="nav-iteme mx-2">
                            <NavLink to="/about" className="navbar-brand nam">
                                <h3>About</h3>
                            </NavLink>
                        </li>
                        <li class="nav-item mx-2">
                            <NavLink to="/contact" className="navbar-brand name">
                                <h3>Contact</h3>
                            </NavLink>
                        </li>
                        <li class="nav-item mx-2">
                            <NavLink to="/portfolio" className="navbar-brand name">
                                <h3>Portfolio </h3>
                            </NavLink>
                        </li>
                        <li class="nav-item mx-2">
                            <a className="link" href={resume} target="_blank" rel="noreferrer"><h3>Resume</h3></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from "react";
import "./header.css"
import "./mediaBurger.css"
import logo from "..//..//imgs/logo.svg"
import Hydra from "..//..//imgs/Hydra.svg"
import { useRef } from "react";


export default function Header() {

    const burger = useRef()
    const nav = useRef()

    const addClass = () => {
        burger.current.classList.toggle("active")
        nav.current.classList.toggle("active")
        document.querySelector("body").classList.toggle("lock")
    }

    return (
        <header className="header" >
            <div className="container">
                {/* nav bar */}
                <div className="header_body">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                        <img src={Hydra} alt="Hydra" />

                    </div>
                    <div className="header_burger" ref={burger} onClick={addClass} >
                        <span></span>
                    </div>
                    <nav className="header_nav" ref={nav}>
                        <ul>
                            <li><a href="#about" className="link" onClick={addClass}>ABOUT</a></li>
                            <li><a href="#services" className="link"  onClick={addClass} >SERVICES</a></li>
                            <li><a href="#techno" className="link" onClick={addClass} >TECHNOLOGIES</a></li>
                            <li><a href="#how_to" className="link" onClick={addClass} >HOW TO</a></li>
                            <li className="li_us"><a href="#contacts" className="contact_us" onClick={addClass}>CONTACT US</a></li>
                            <li><a href="#join_hydra" className="gradient_link" onClick={addClass}>JOIN HYDRA</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
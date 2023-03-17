import React from "react";
import "./footer.css"
import logo from "..//..//imgs/logo.svg"
import fb from "./icons/fb.png"
import tw from "./icons/tw.png"
import lin from "./icons/in.png"
import you from "./icons/you.png"
import inst from "./icons/inst.png"
import pi from "./icons/pi.png"
import back from "./icons/back.png"

export default function Footer(params) {

    return (
        <footer className="footer" style={{ backgroundImage: `url(${back})` }} >
            <div className="container">
                <div className="first_blok">
                    <img src={logo} alt="#"  className="_logo" />
                    <div className="_vertlin"></div>
                    <div className="nav_links">
                        <a href="#!">ABOUT</a>
                        <a href="#!">SERVICES</a>
                        <a href="#!">TECHNOLOGIES</a>
                        <a href="#!">HOW TO</a>
                        <a href="#!">JOIN HYDRA</a>
                    </div>
                    <div className="_vertlin"></div>
                    <div className="nav_links">
                        <a href="#!">F.A.Q</a>
                        <a href="#!">SITEMAP</a>
                        <a href="#!">CONDITIONS</a>
                        <a href="#!">LICENSES</a>
                    </div>
                    <div className="_vertlin"></div>
                    <div className="socialnetworks">
                        <p>SOCIALIZE WITH HYDRA</p>

                        <div className="soc_icons">
                            <img src={fb} alt="#" />
                            <img src={tw} alt="#" />
                            <img src={lin} alt="#" />
                            <img src={you} alt="#" />
                            <img src={inst} alt="#" />
                            <img src={pi} alt="#" />
                        </div>
                        <button href="#!" className="gradient_link _mt ">BUILD YOUR WORLD</button>
                    </div>
                </div>
                <hr className="_gl" />
                <p className="_fp">
                    2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
                </p>
            <p id="cr">https://github.com/HarutyunyanMovses</p>
            </div>
        </footer>
    )
}
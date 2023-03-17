import React, { useState } from "react";
import "./section3.css"

import elipse from "..//..//..//imgs/ellipse.png"
import back from "./icons/back.png"
import shape from "./icons/shape.png"
import i1 from "./icons/1.png"
import i2 from "./icons/2.png"
import i3 from "./icons/3.png"
import i4 from "./icons/4.png"
import Slider3 from "./slider3";

export default function Section3(params) {

    const [techno, setTechno] = useState(false)

    return (
        <section className="section3" id="techno">
            <div className="container">
                <div className="section3_body">
                    <div className="first" style={{ backgroundImage: `url(${back})` }}>
                        <h1>TECHNOLOGIES & HARDWARE</h1>
                        <p>USED BY HYDRA VR.</p>
                        <div className="el" style={{ backgroundImage: `url(${elipse})` }} 
                        onClick={()=>techno?setTechno(false):setTechno(true)}>
                            <div className="sp">
                                <img src={shape} alt=">" className="rot"/>
                            </div>
                        </div>
                    </div>
                    <Slider3 />
                    {
                        techno ?
                            <div className="last">
                                <img src={i1} alt="s" />
                                <img src={i2} alt="s" />
                                <img src={i3} alt="s" />
                                <img src={i4} alt="s" />
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </section>
    )
}
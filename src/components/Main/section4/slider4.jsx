import React from "react";
import { useState } from "react";
import elipse from "..//..//..//imgs/ellipse.png"
import shape from "./icons/shape.png"



export default function Slider4(params) {
    const [position, setPosition] = useState(0)

    return (
        <div className=" _section4_slide ">
            <button className="left_shape l" onClick={() => {
                setPosition(position ? position - 1 : 3)
            }}>
                <div className="s">
                    <img src={shape} alt="<" />
                </div>
            </button>
            <div className="slider_content">
                {
                    position === 0 ?
                        <div className="s4_blok">
                            <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="sp _sp">
                                    <p>01</p>
                                </div>
                            </div>
                            <div className="s4_b_text">
                                <h1>3D Conception <br />
                                    & Design</h1>
                            </div>
                        </div>
                        : <></>
                }
                {
                    position === 1 ?
                        <div className="s4_blok">
                            <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="sp _sp">
                                    <p>02</p>
                                </div>
                            </div>
                            <div className="s4_b_text">
                                <h1>Interaction<br />
                                    Design</h1>
                            </div>
                        </div>
                        : <></>

                }
                {
                    position === 2 ?
                        <div className="s4_blok">
                            <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="sp _sp">
                                    <p>03</p>
                                </div>
                            </div>
                            <div className="s4_b_text">
                                <h1>VR World<br />
                                    User Testing</h1>
                            </div>
                        </div>
                        : <></>

                }
                {
                    position === 3 ?
                        <div className="s4_blok">
                            <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="sp _sp">
                                    <p>04</p>
                                </div>
                            </div>
                            <div className="s4_b_text">
                                <h1>Hydra VR<br />
                                    Deploy</h1>
                            </div>
                        </div>
                        : <></>
                }
            </div>
            <button className="right_shape r" onClick={() => {
                setPosition(position < 3 ? position + 1 : 0)
            }}>
                <div className="s">
                    <img src={shape} alt=">" />
                </div>
            </button>
        </div>
    )
}

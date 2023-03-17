import React from "react";
import { useState } from "react";
import elipse from "..//..//..//imgs/ellipse.png"
import i1 from "./icons/1.png"
import i2 from "./icons/2.png"
import i3 from "./icons/3.png"
import i4 from "./icons/4.png"
import shape from "./icons/shape.png"



export default function Slider2(params) {
    const [position, setPosition] = useState(0)

    return (
        <div className=" _section2_slide ">
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
                        <div className="blok">
                            <div className="elipse" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="blok_img" style={{ backgroundImage: `url(${i1})` }}></div>
                            </div>
                            <h2>SIMULATION</h2>
                            <hr />
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button href="#!" className="gradient_link _mb">TRY IT NOW</button>
                        </div> : <></>
                }
                {
                    position === 1 ?
                        <div className="blok">
                            <div className="elipse" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="blok_img" style={{ backgroundImage: `url(${i2})` }}></div>
                            </div>
                            <h2>EDUCATION</h2>
                            <hr />
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button href="#!" className="gradient_link _mb">TRY IT NOW</button>
                        </div> : <></>

                }
                {
                    position === 2 ?
                        <div className="blok">
                            <div className="elipse" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="blok_img" style={{ backgroundImage: `url(${i3})` }}></div>
                            </div>
                            <h2>SELF-CARE</h2>
                            <hr />
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button href="#!" className="gradient_link _mb">TRY IT NOW</button>
                        </div> : <></>

                }
                {
                    position === 3 ?
                        <div className="blok">
                            <div className="elipse" style={{ backgroundImage: `url(${elipse})` }}>
                                <div className="blok_img" style={{ backgroundImage: `url(${i4})` }}></div>
                            </div>
                            <h2>OUTDOOR</h2>
                            <hr />
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button href="#!" className="gradient_link _mb">TRY IT NOW</button>
                        </div> : <></>
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

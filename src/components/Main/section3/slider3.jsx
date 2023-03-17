import React from "react";
import { useState } from "react";
import i1 from "./icons/1.png"
import i2 from "./icons/2.png"
import i3 from "./icons/3.png"
import i4 from "./icons/4.png"
import shape from "./icons/shape.png"



export default function Slider3(params) {
    const [position, setPosition] = useState(0)

    return (
        <div className=" _section3_slide ">
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
                        <img src={i1} alt="s" />
                        : <></>
                }
                {
                    position === 1 ?
                        <img src={i2} alt="s" />
                        : <></>

                }
                {
                    position === 2 ?
                        <img src={i3} alt="s" />
                        : <></>

                }
                {
                    position === 3 ?
                        <img src={i4} alt="s" />
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

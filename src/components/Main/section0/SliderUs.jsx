import React from "react";
import locIcon from "./icons/loc.png"
import callIcon from "./icons/call.png"
import mailIcon from "./icons/mail.png"
import shape from "./icons/shape.png"
import { useState } from "react";

import "./sliderUs.css"


export default function SliderUs() {
    const [position, setPosition] = useState(0)

    return (
        <div className="slide-container " id="contacts">
            <button className="left_shape" onClick={() => {
                setPosition(position ? position - 1 : 2)
            }}>
                <img src={shape} alt="<" />
            </button>
            <div className="slider_content_">
                {
                    position === 0 ?
                        <div className="location">
                            <img src={locIcon} alt="Location" />
                            <div className="loc_about">
                                <h2>Pay Us a Visit</h2><br />
                                <p>Union St, Seattle, WA 98101, United States</p>
                            </div>
                        </div> : <></>
                }
                {
                    position === 1 ?
                        <div className="call">
                            <img src={callIcon} alt="Call" />
                            <div className="call_about">
                                <h2>Give Us a Call</h2><br />
                                <p>(110) 1111-1010</p>
                            </div>
                        </div> : <></>

                }
                {
                    position === 2 ?
                        <div className="send_mess">
                            <img src={mailIcon} alt="Mess" />
                            <div className="mess_about">
                                <h2>Send Us a Message</h2><br />
                                <p>Contact@HydraVTech.com</p>
                            </div>
                        </div> : <></>

                }
            </div>
            <button className="right_shape" onClick={() => {
                setPosition(position < 2 ? position + 1 : 0)
            }}>
                <img src={shape} alt=">" />
            </button>
        </div>
    )
}
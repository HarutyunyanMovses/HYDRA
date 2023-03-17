import React from "react";
import "./styleHealpers.css"
import sleck from "..//Main/section1/icons/slack.png"

export default function Int({ inerH1, inerP, bool }) {

    return (
        <div className="int">
            <h1>{inerH1}</h1>
            <div className="text_int">
                <p>{inerP}</p>
                {
                    bool ? (
                    <div className="text_int_icon">
                        <div className="sleck_img" style={{ backgroundImage: `url(${sleck})` }}></div>
                    </div>
                    ) : (<></>)
                }
            </div>
        </div>
    )
}
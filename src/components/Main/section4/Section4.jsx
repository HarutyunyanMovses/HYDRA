import React from "react";
import "./section4.css"
import elipse from "..//..//..//imgs/ellipse.png"
import back from "./icons/back.png"
import Int from "../../healperComponents/Int";
import slack from "./icons/slack.png"
import Slider4 from "./slider4";

export default function Section4(params) {



    return (
        <section className="section4" style={{ backgroundImage: `url(${back})` }}id="how_to" >
            <div className="container">
                <div className="header_row_s">
                    <Int inerH1={"HOW WE BUILD"} inerP={"WITH HYDRA VR?"} bool={true} />
                    <p className="sec1_1p">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
                <Slider4/>
                <div className="section4_content">
                    <div className="s4_blok">
                        <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                            <div className="sp _sp">
                                <p>01</p>
                            </div>
                        </div>
                        <div className="s4_b_text">
                            <img src={slack} alt="->" />
                            <h1>3D Conception <br />
                                & Design</h1>
                        </div>
                    </div>
                    <div className="s4_blok">
                        <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                            <div className="sp _sp">
                                <p>02</p>
                            </div>
                        </div>
                        <div className="s4_b_text">
                            <img src={slack} alt="->" />
                            <h1>Interaction<br />
                                Design</h1>
                        </div>
                    </div>
                    <div className="s4_blok">
                        <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                            <div className="sp _sp">
                                <p>03</p>
                            </div>
                        </div>
                        <div className="s4_b_text">
                            <img src={slack} alt="->" />
                            <h1>VR World<br />
                                User Testing</h1>
                        </div>
                    </div>
                    <div className="s4_blok">
                        <div className="el _el" style={{ backgroundImage: `url(${elipse})` }}>
                            <div className="sp _sp">
                                <p>04</p>
                            </div>
                        </div>
                        <div className="s4_b_text">
                                <img src={slack} alt="->" />
                                <h1>Hydra VR<br />
                                    Deploy</h1>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

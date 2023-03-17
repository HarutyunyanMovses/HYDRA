import React from "react";
import "./section2.css"
import back from "./icons/back.png"
import elipse from "..//..//..//imgs/ellipse.png"
import i1 from "./icons/1.png"
import i2 from "./icons/2.png"
import i3 from "./icons/3.png"
import i4 from "./icons/4.png"
import Int from "../../healperComponents/Int";
import Slider2 from "./slider2";



export default function Section2(params) {


    return (
        <section className="section2" style={{ backgroundImage: `url(${back})` }} id="services">
            <div className="container">
                {/* section one header */}
                <div className="header_row_s">
                    <Int inerH1={"WHY BUILD"} inerP={"WITH HYDRA?"} bool={true} />
                    <p className="sec1_1p">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
                {/* main section 1 */}
                <Slider2/>
                <div className="section2_content">
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
                    </div>
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
                    </div>
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
                    </div>
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
                    </div>
                </div>
            </div>
        </section>
    )

}

import React from "react";
import "./section0.css"
import head1 from "./icons/hed1.png"
import backHed from "./icons/background1.png"
import locIcon from "./icons/loc.png"
import callIcon from "./icons/call.png"
import mailIcon from "./icons/mail.png"
import s from "./icons/1.png"
import SliderUs from "./SliderUs";

export default function Section0(params) {


    return (
        <section className="section0" style={{ backgroundImage: `url(${backHed})` }}>
            <div className="container">
                <div className="section0_body">
                    <div className="header_content">
                        <div className="header_txet">

                            <h1 className="header_headeing">
                                <span className="grad">Dive</span> Into The Depths <br />
                                Of <span className="grad">Virtual Reality</span>
                            </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                            <div className="btn">
                                <button href="#!" className="gradient_link">BUILD YOUR WORLD</button>
                                <img src={s} alt="->" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className="header_img">
                            <img src={head1} alt="img" />
                        </div>
                    </div>
                    {/* contact us */}
                    <SliderUs />
                    <div className="contacts_us" id="contacts" >
                        <div className="contacts_us_iner">
                            <div className="location">
                                <img src={locIcon} alt="Location" />
                                <div className="loc_about">
                                    <h2>Pay Us a Visit</h2><br />
                                    <p>Union St, Seattle, WA 98101, United States</p>
                                </div>
                            </div>
                            <div className="vl"></div>
                            <div className="call">
                                <img src={callIcon} alt="Call" />
                                <div className="call_about">
                                    <h2>Give Us a Call</h2><br />
                                    <p>(110) 1111-1010</p>
                                </div>
                            </div>
                            <div className="vl"></div>
                            <div className="send_mess">
                                <img src={mailIcon} alt="Mess" />
                                <div className="mess_about">
                                    <h2>Send Us a Message</h2><br />
                                    <p>Contact@HydraVTech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
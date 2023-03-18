import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Section0 from "./Main/section0/section0";
import Section1 from "./Main/section1/Section1";
import Section2 from "./Main/section2/Section2";
import Section3 from "./Main/section3/Section3";
import Section4 from "./Main/section4/Section4";
import Section5 from "./Main/section5/Section5";
//media
import "./media_index/1024.css"
import "./media_index/916hed.css"
import "./media_index/mobile.css"


export default function AppHydra(params) {

    return (
        <div className="appHydra">
            <Header />
            <div className="">
                <Section0 />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </div>
            <Footer />
        </div>
    )
}
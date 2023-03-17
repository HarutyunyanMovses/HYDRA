import React from "react";
import "./section1.css"
import sec1Bsck from "./icons/sec1back.png"
import Int from "../../healperComponents/Int";
import img2 from "./icons/img2.png"

export default function Section1(params) {


    return (
        <section className="section1" style={{ backgroundImage: `url(${sec1Bsck})` }} id="about">
            <div className="container">
                {/* section one header */}
                <div className="header_row_s">
                    <Int inerH1={"INTRODUCTION"} inerP={"TO HYDRA VR"} bool={true} />
                    <p className="sec1_1p">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
                {/* main section 1 */}
                <div className="section_content">
                    <img src={img2} alt="oooo" />
                    <div className="section_text">
                        <Int inerH1={"About"} inerP={"HYDRA VR"} />
                        <p className="sec1_1p _ma">
                            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.
                        </p>
                        <button href="#!" className="gradient_link">LET’S GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
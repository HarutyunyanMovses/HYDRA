import React, { useState } from "react";
import "./section5.css"
import Request from "../../../JS/Request";

export default function Section5(params) {

    const [name, setName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [subject, setSubject] = useState()
    const [description, setDescription] = useState()


    const join_hydra = () =>{
        Request.post("admin/join_to_hydra",{
            name,
            lastname,
            email,
            phone,
            subject,
            description
        })
        .then(data=>{
            console.log(data);
        })
        .catch(e=>{
            alert("join error")
        })

setDescription('')
setEmail('')
setLastName('')
setName('')
setPhone('')
setSubject('')

    }


    return (
        <section className="section5" id="join_hydra">
            <div className="container ">
                <div className="section5_body">
                    <div className="s_5_head">
                        <h1>JOIN HYDRA</h1>
                        <hr />
                        <p>Let’s Build Your VR Experience</p>
                    </div>
                    <div className="_form">
                        <div className="_f_blok">
                            <input type="text"
                                placeholder="Fisrt Name"
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                            <input type="text" 
                            placeholder="Last Name"
                             value={lastname}
                             onChange={(e)=>{setLastName(e.target.value)}}
                            />
                        </div>
                        <div className="_f_blok">
                            <input type="text" placeholder="Email"
                             value={email}
                             onChange={(e)=>{setEmail(e.target.value)}} />
                            <input type="text" placeholder="Phone Number"
                             value={phone}
                             onChange={(e)=>{setPhone(e.target.value)}}
                              />
                        </div>
                        <div className="_f_blok">
                            <input type="text" placeholder="Subject" id="subject" 
                            value={subject} 
                            onChange={(e)=>{setSubject(e.target.value)}}/>
                        </div>
                        <div className="_f_blok">
                            <textarea placeholder="Tell Us Something..." className="_tarea" 
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                             />
                        </div>
                    </div>
                    <button href="#!" className="gradient_link _mb" onClick={join_hydra}>SEND TO HYDRA</button>
                </div>
            </div>
        </section>
    )
}
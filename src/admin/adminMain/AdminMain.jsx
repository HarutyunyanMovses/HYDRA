import React, { useLayoutEffect, useState } from "react";
import Request from "..//..//JS/Request"
import "./adminMain.css"

export default function AdminMain(params) {

    const [data, setData] = useState([])

    useLayoutEffect(() => {
        Request.get("admin/joineds")
            .then(dat => setData(dat))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="admin_main">
            <div className="container">
                <div className="admin_main_body">
                    <div className="joineds">
                        {
                           data.length?(  data.map(item => {
                                return (
                                    <div className="joined_user">
                                        <div className="full_name">
                                            <p>{item.name}</p>
                                            <p>{item.lastname}</p>
                                        </div>
                                        <div className="conta">
                                            <p>{item.email}</p>
                                            <p>{item.phone}</p>
                                        </div>
                                        <div className="subject_desc">
                                            <p>{item.subject}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                           ):<></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
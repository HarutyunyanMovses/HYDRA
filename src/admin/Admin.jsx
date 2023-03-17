import React, { useState } from "react";
import "./admin.css"
import AdminMain from "./adminMain/AdminMain";
import LogIn from "./login/LogIn";


export default function Admin(params) {

    const [logged, setLogged] = useState(false)

    return (
        <>
            {
                !logged ? <LogIn setLogged={setLogged} /> : <AdminMain/>
            }
        </>
    )
}
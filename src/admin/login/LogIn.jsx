import React, { useState } from "react";
import Request from "..//..//JS/Request"
import "./login.css"


export default function LogIn({ setLogged }) {

    const [username, setUsername] = useState()
    const [pass, setPass] = useState()

    const log_in = () => {
          Request.post("auth/login",{email:username,password:pass})
          .then(d=>{
              setLogged(true)
          })
          .catch(e=>{
            alert("du admin ches")
          })
    }

    return (
        <div className="log_in">
            <div className="log_in_body">
                <div className="form">
                    <h1>Log In Admin page</h1>
                    <input type="text" placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="password" placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button onClick={log_in}>Log In</button>
                </div>
            </div>
        </div>
    )
}
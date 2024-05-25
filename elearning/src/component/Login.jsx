import React from "react";
import { useState } from "react";

export function Login(){
    const [email , setEmail] = useState('');
    const [password, setPassword]= useState('');
    return(
        <div className="login-container">
            <from onsubmit ={(e)=>e.preventDefault()}>
                <div className="form-group">
                    <lable htmlFor="email">UserName:</lable>
                    <input type="text" name="" id="username" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                   <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" value={password}onChange={(e) => setPassword(e.target.value)}/>
               </div>
            </from>
        </div>
    )
}
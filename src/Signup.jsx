import React, { useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Login';
import Header from "./Header.jsx";
import "./Signup.css"


function Signup() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [userType, setUserType] = useState("");

    const [tc, setTc] = useState(false);
    const checkboxHandler = () => {
        setTc(!tc);
    }

    function signup() {
        let items = { name, email, password, password_confirmation, userType, tc }
        console.warn(items);
        axios.post('https://watch-dials.onrender.com/api/user/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            userType: userType,
            tc: tc
        })
            .then(result => {
                console.log(result);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (<>
    <Header/>
        <div className="col-sm-6 offset-sm-3" id="formm">
            <h2>Create an Account. Signup !!</h2>

            <div className="mb-3">
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} placeholder="Confirm Password" />
            </div>
            <div className="mb-3">
                <select className="form-control" value={userType} onChange={(e) => setUserType(e.target.value)} >
                    <option value="">--  Select-Usertype  --</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                
                </select>
            </div>
            <div>
                <input type="checkbox" id="tc" value={tc} onChange={checkboxHandler} />
                <label htmlFor="tc">T&C</label>
            </div>
            <div className="col-12">
              <Link to="/login">  <button className="btn btn-outline-primary" id="button1" onClick={signup} type="submit">Sign up</button></Link>

                <Link to="/login"> <button className="btn btn-outline-primary" id="button2" type="submit">Login</button></Link>
            </div>
        </div>
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    </>)
}
export default Signup;
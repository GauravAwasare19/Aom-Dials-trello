import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

function Login(){
 
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  

    function login()
    {
        let items={email,password}
        console.warn(items);
        axios.post('https://watch-dials.onrender.com/api/user/login',{   
            email: email,
            password: password,
        })
        .then(result=>{
            console.log(result);

        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (<>
    <Header/>
        <div className="col-sm-6 offset-sm-3" id="Login">
            <h2> Already have an Account. Log-in!</h2>
            
            <div className="mb-3">
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            </div>
            
            <div className="col-12">
               <Link to="/app"> <button className="btn btn-outline-primary" onClick={login} type="submit">Log In</button></Link>
            </div>
        </div>
    </>)
}
export default Login;
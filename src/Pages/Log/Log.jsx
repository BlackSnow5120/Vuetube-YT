import React, { useState , useEffect} from "react";
import './Log.css'
import "../../Components/CustData/Cust"
import { isGet1, isSign } from "../../Components/CustData/Cust";
import { isValid } from "../../Components/CustData/Cust";
import vid from "../../vid1.mp4";

const Log = () => {

    var [signup,setsignup] = useState(0);
    var [em,setem] = useState("");
    var [ps,setps] = useState("");
    var [fn,setfn] = useState("");
    var [ln,setln] = useState("");
    var msg;
    function handle1(event){setem(event.target.value)}
    function handle2(event){setps(event.target.value)}
    function handle3(event){setfn(event.target.value)}
    function handle4(event){setln(event.target.value)}
    var data1234=[];

    if(signup==0)
    {
        return(
            <div className="container1234">
                <video autoPlay muted loop id="myVideo" src={vid}>

         </video>
            <div className="container123">
        <form id="loginform">
            <h5>Use email:bhuvain@gmail.com pass:hello123 or sign up</h5>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handle1} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handle2} required />
        </form>
        <div className="lgnup">
        <button type="button" onClick={()=>{msg = isValid(em,ps)}}>Login</button>
        </div>
        <div className="lgnup" >
    <p>Don't have an account? <a href="#" onClick={() => {setsignup(1)}}>Sign Up</a></p>
    <div id="error-message">{isGet1()}</div>
    </div>
        </div>
        </div>
        ) 
        
    }
    else
    {
    return(
  
    <div className="container1234">
        <video autoPlay muted loop id="myVideo" src={vid}>
         </video>
    <div className="container123">
    <form id="loginform">
        <img src="../../assets/logo.png" alt="" />
    <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handle1} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handle2} required />
            <label className="sgnup" htmlFor="name">Full Name:</label>
            <input className="sgnup" type="name" id="name" name="name" onChange={handle3} required />
            <label className="sgnup" htmlFor="lname">Last Name</label>
            <input className="sgnup" type="lname" id="lname" name="lname" onChange={handle4} required />
            <label className="sgnup" htmlFor="bday">Date of Birth</label>
            <input className="sgnup" id="bday" type="date" max="1995-12-31" required="" />
            

            <div className="sgnup">
            
                <button type="button" onClick={() => {msg = isSign(em,ps,fn,ln)}} >Sign Up</button>
            
            </div>
    </form>
    
    <div className="sgnup">
      <p>Already have an account? <a href="#" onClick={() => {setsignup(0)}}>Login</a></p>
    </div>
    <div id="error-message">{isGet1()}</div>


    </div>
    </div>
    );
}

};

export default Log;
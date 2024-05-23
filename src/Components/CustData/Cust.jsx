import React, { useState } from "react";

var emailL = ["phalya@gmail.com","bhuvain@gmail.com"];
var passL = ["hello123","hello123"];
var FName = ["Phalya","Bhuvain"];
var LName = ["Jhamb","Jhamb"]
var msg;


export function isValid(a,b)
{
    for(let i=0 ; i < emailL.length ; i++)
    {
        
        if(a==emailL[i] && b==passL[i])
        {
            save();
            location.href="/"+i;
        }
    }
    msg = "Incorrect Email/Password";
}

export function isSign(a,b,c,d,e)
{
    if(!isValidEmail(a)){msg =  "Please Enter Valid Email";return;}
    if(!isValidName(c)){msg = "Please Enter Valid First Name";return;}
    if(!isValidName(d)){msg = "Please Enter Valid Last Name";return;}
    emailL.push(a);
    passL.push(b);
    FName.push(c);
    LName.push(d);
    msg="";
    save();
    console.log(emailL[2]);
    location.href = "/"+(emailL.length-1);
}

function save(){
    localStorage.setItem('emailL',JSON.stringify(emailL));
    localStorage.setItem('passL',JSON.stringify(passL));
    localStorage.setItem('FName',JSON.stringify(FName));
    localStorage.setItem('LName',JSON.stringify(LName));

}
function load()
{
    emailL = JSON.parse(localStorage.getItem('emailL'));
    passL = JSON.parse(localStorage.getItem('passL'));
    FName = JSON.parse(localStorage.getItem('FName'));
    LName = JSON.parse(localStorage.getItem('LName'));
}
export function isGet(a)
{
    load();
    console.log(FName[2]);
    return FName[a]+" "+LName[a];
}

export function isGet1()
{
    return msg;
}




function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isValidName(name) {
    var nameRegex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
    return nameRegex.test(name);
  }
import React, { useState } from 'react'
import "./Entry.css"
import { LoginForm } from '../../Components/Login/Login.Comp';
import { PasswordReset } from '../../Components/PasswordReset.Comp';

import Jumbotron from 'react-bootstrap/Jumbotron'
export const Entry = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [typeImplementation,settype]=useState("Login");
  
  const onChangeEvent=(e)=>{
      const {name, value}=e.target;
      switch(name){
        case 'email': setEmail(value);
        break;
        case 'password': setPassword(value);
        break;
        default:
        break;

      }
  }

  const SubmitData=(e)=>{
  
    console.log("button invoked..");
    if(!email || !password){
      alert("Please fill all details....!!!!");
    }
  }
  return (
<div className="entry-page bg-info">
<Jumbotron className='form-box'>
    <LoginForm onChangeEvent={onChangeEvent} email={email} pass={password} SubmitData={SubmitData} />
    <PasswordReset onChangeEvent={onChangeEvent} email={email}  SubmitData={SubmitData} />

</Jumbotron>
</div>  )
}
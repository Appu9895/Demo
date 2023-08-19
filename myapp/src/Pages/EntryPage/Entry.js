import React from 'react'
import "./Entry.css"
import { LoginForm } from '../../Components/Login/Login.Comp';

import Jumbotron from 'react-bootstrap/Jumbotron'
export const Entry = () => {
  return (
<div className="entry-page bg-info">
<Jumbotron>
    <LoginForm/>
</Jumbotron>
</div>  )
}
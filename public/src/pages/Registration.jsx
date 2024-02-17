import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
function Registration() {
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Form")
    };

    const handleChange=(event)=>{};

  return (
  <>
  <FormContainer>
    <form onSubmit={(event)=>handleSubmit(event)}>
        <div className='brand'>
            <img src="" alt=""/>
            <h1>chatty</h1>
        </div>
        <input type='text' placeholder='Username' name="username" onChange={(e)=>handleChange(e)}/>
        <input type='password' placeholder='Password' name="password" onChange={(e)=>handleChange(e)}/>
        <input type='password' placeholder='Confirm Password' name="confirmpassword" onChange={(e)=>handleChange(e)}/>
        <button type="submit">Create User</button>
        <span>already have an account?
            <Link to="/login">Login</Link>
        </span>
    </form>
  </FormContainer>
  </>
  )
}

const FormContainer=styled.div= styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (min-width: 768px) {
  width: 40%;
}
`

export default Registration

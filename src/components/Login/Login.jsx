import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [secretKey, setSecretKey] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(secretKey){

            if(secretKey==="save"){
                navigate("/");
            }else{
                alert("Illegal Entry")
            }

        }else{
            alert("Enter The Key")
        }
    }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Secret Key</label>
        <input 
            value={secretKey}
            className='login-input'
            placeholder='Enter Key'
            onChange={(event)=>setSecretKey(event.target.value)}
        />
        <button className='btn-primary' onClick={handleSubmit}>Proceed</button>

      </form>
      

    </div>
  )
}

export default Login

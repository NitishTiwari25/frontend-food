import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let Navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault(); //read about preventdefault
    const response = await fetch("https://backend-food-delivery.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })   //read about stringify
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("enter valid credentials");
    }

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email); 
      localStorage.setItem("authtoken", json.authtoken); //for storing password locally
      console.log(localStorage.getItem("authtoken"))
      Navigate("/");
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={(handlesubmit)}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
          </div>


          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I am a new user</Link>
        </form>

      </div>
    </>




  )
}

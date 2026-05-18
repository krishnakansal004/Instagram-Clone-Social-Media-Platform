import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";



const Login = () => {

  const {user,loading,handleRegister} = useAuth()

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister(userName,email,password)

    navigate('/')
  }
  if(loading){
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e)=>{setuserName(e.target.value)}}
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input
            onInput={(e)=>{setEmail(e.target.value)}}

            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <input
            onInput={(e)=>{setPassword(e.target.value)}}
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button type="submit" className="button primary-button">Register</button>
          <p>
            Already have an account? <Link to={"/login"}>Login </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;

import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(email,password)

    navigate('/')
  };

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
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e)=>{setEmail(e.target.value)}}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input
            onInput={(e)=>{setPassword(e.target.value)}}
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button type="submit" className="button primary-button">Login</button>
          <p>
            Don't have an account? <Link to={"/register"}>Create One</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;

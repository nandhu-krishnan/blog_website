import React, { useState } from "react";
import { auth } from "../Firebase/Firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import '../Style/login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
        navigate("/home"); // Use navigate to redirect
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    </div>
  );
};

export default Login;

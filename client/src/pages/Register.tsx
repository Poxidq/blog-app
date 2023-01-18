import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "@/context/authContext";

import { AuthContainer, AuthTitle, AuthForm } from "@/styles/auth";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  })
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const handleChange = (e: React.ChangeEvent<any>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      await register(inputs)
      navigate("/login");
    } catch (err: any) {
      setError(err.response.data);
    }
  };
  return (
    <AuthContainer>
      <AuthTitle>Register</AuthTitle>
      <AuthForm>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="text" placeholder="email" name="email" onChange={handleChange} />
        <input required type="text" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Sign in</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </AuthForm>

    </AuthContainer>
  )
}

export default Register;
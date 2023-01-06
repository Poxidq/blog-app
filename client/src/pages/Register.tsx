import React from "react";

import { AuthContainer, AuthTitle, AuthForm } from "../styles/auth";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthContainer>
      <AuthTitle>Register</AuthTitle>
      <AuthForm>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="email" />
        <input required type="text" placeholder="password" />
        <button>Sign in</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </AuthForm>

    </AuthContainer>
  )
}

export default Register;
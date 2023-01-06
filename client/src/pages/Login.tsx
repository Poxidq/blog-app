import React from "react";

import { AuthContainer, AuthTitle, AuthForm } from "../styles/auth";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <AuthContainer>
            <AuthTitle> Login</AuthTitle>
            <AuthForm>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button>Sign in</button>
                <p>This is an error!</p>
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </AuthForm>

        </AuthContainer>
    )
}

export default Login;
import React, { ErrorInfo, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "@/context/authContext";

import { AuthContainer, AuthTitle, AuthForm } from "@/styles/auth";
const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })
    const [err, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleChange = (e: React.ChangeEvent<any>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        try {
            await login(inputs)
            navigate("/");
        } catch (err: any) {
            setError(err.response);
        }
    };
    return (
        <AuthContainer>
            <AuthTitle> Login</AuthTitle>
            <AuthForm>
                <input type="text" placeholder="username" name="username"
                    onChange={handleChange} />
                <input type="text" placeholder="password" name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Sign in</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </AuthForm>

        </AuthContainer>
    )
}

export default Login;
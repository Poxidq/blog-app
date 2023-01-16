import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

import { IAuthContext, defaultState } from '../@types/authContext.d';

export const AuthContext = createContext<IAuthContext>(defaultState);

export const AuthContexProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") || "")
  );

  const login = async (inputs: { username: string, password: string }) => {
    const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`);
    setCurrentUser(null);
  };

  const register = async (inputs: { username: string, password: string, email: string }) => {
    await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/register`, inputs);
    setCurrentUser(null);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

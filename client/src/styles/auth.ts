import styled from "styled-components";

import { AuthVariables } from "./variables";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${AuthVariables.bgColor};
`;

export const AuthTitle = styled.h1`
  font-size: 20px;
  color: ${AuthVariables.titleColor};
  margin-bottom: 20px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: white;
  width: 200px;
  gap: 20px;

  input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
  }

  button {
    padding: 10px;
    border: none;
    background-color: ${AuthVariables.titleColor};
    color: white;
    cursor: pointer;
  }

  span {
    font-size: 12px;
    text-align: center;
  }

  p {
    font-size: 12px;
    color: red;
    text-align: center;
  }
`;

import styled from "styled-components";

import { variables } from "./variables";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${variables.black};
  width: 100%;
`;

export const AuthTitle = styled.h1`
  font-size: 3em;
  color: ${variables.white};
  margin-bottom: 20px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${variables.white};
  width: 25%;
  gap: 2rem;
  font-family: 'Inconsolata', monospace;


  input {
    font-size: 20px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid ${variables.gray};
    outline: none;
    background: none;
    
  }

  button {
    padding: 10px;
    border: none;
    background-color: ${variables.breeze};
    color: ${variables.white};
    cursor: pointer;
  }

  span {
    font-size: 12px;
    text-align: center;
    color: ${variables.gray};
  }

  p {
    font-size: 12px;
    color: ${variables.red};
    text-align: center;
  }
`;

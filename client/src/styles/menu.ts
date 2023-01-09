import styled from "styled-components";

import { variables } from "./variables";

export const MenuComponent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    font-size: 20px;
    color: ${variables.breeze};
  }
`;

export const MenuPostComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    color: ${variables.breeze};
  }

  button {
    width: max-content;
    padding: 7.5px 15px;
    cursor: pointer;
    color: ${variables.breeze};
    background-color: ${variables.white};
    border: 1px solid ${variables.white};
    border-radius: 0.3rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      border: 1px solid ${variables.breeze};
      background-color: ${variables.black};
      color: ${variables.white};
    }
  }
`;

import styled from "styled-components";

import { variables } from "./variables";

export const NavbarContainer = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogo = styled.div`
  width: 7.5rem;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 2%;
  justify-content: flex-end;

  h6 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  span {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  & > a {
    text-decoration: none;
    color: ${variables.white};
    padding: 0.5rem 0.7rem;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      color: ${variables.black};
      background: ${variables.white};
    }
  }
`;

export const NavbarWrite = styled.span`
  background-color: ${variables.white};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  border: 1px solid ${variables.white};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${variables.breeze};
    border: 1px solid ${variables.breeze};
    transition: all 0.3s ease;
    a {
      color: ${variables.white};
    }
  }

  a {
    color: ${variables.black};
  }
`;

export const NavbarSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  color: ${variables.white};
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    color: ${variables.black};
    background: ${variables.white};
  }
`;

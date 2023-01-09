import styled from "styled-components";

import { variables } from "./variables";

export const HomeComponent = styled.div``;

export const HomePosts = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const HomePost = styled.div`
  display: flex;
  gap: 100px;
  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
`;

export const HomePostImageComponent = styled.div`
  max-height: 400px;
  width: 100%;
  flex: 2;
  position: relative;
  &:hover {
    &::after {
      background: ${variables.breeze};
    }
  }
  &::after {
    transition: all 0.2s ease;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${variables.white};
    position: absolute;
    top: 20px;
    left: -20px;
    z-index: 0;
    max-height: 400px;
  }

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    z-index: 1;
    position: relative;
    height: 100%;
  }
`;

export const HomePostContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    text-decoration-color: ${variables.breeze};
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${variables.breeze};
      text-decoration-thickness: 1px;
    }
  }
  h1 {
    font-size: 48px;
    color: ${variables.breeze};
  }

  p {
    font-size: 20px;
    color: ${variables.white};
    overflow: hidden;
  }

  button {
    width: max-content;
    font-size: 24px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: ${variables.white};
    margin-top: 2rem;
    border-radius: 0.3rem;
    transition: all 0.3s ease;
    border: 2px solid ${variables.black};
    &:hover {
      background-color: ${variables.black};
      color: ${variables.white};
      border: 2px solid ${variables.breeze};
    }
  }
`;

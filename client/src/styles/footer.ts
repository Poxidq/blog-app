import styled from "styled-components";

import { variables } from "./variables";

export const FooterComponent = styled.footer`
  margin-top: 100px;
  padding: 20px;
  background-color: ${variables.gray};
  color: ${variables.white};
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  img {
    height: 150px;
    border-radius: 1rem;
  }

  span {
    margin-left: 2rem;
    width: 50%;
    word-wrap: break-word;
  }
`;

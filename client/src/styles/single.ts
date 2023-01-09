import styled from "styled-components";
import { variables } from "./variables";

// import { variables } from "./variables";

export const SingleComponent = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 50px;
`;

export const SingleContentComponent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 30px;
  & > img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
  }
  h1 {
    font-size: 56px;
    font-weight: 700;
    color: ${variables.white};
  }

  p {
    text-align: justify;
    line-height: 30px;
    color: ${variables.white};
  }
`;

export const SingleUserComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  & > img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    object-fit: cover;
  }

  & > span {
    font-weight: bold;
  }
`;

interface EditProps {
  dark?: boolean;
}

export const SingleEditComponent = styled.div<EditProps>`
  display: flex;
  gap: 5px;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    filter: ${(props) => (props.dark ? "" : "invert(100)")};
  }
`;

export const SingleInfoComponent = styled.div<EditProps>`
    margin-left: 1rem;
    margin-right: 1rem;
  & > span {
    color: ${variables.white};
    font-size: 20px;
  }

  & > p {
    color: ${variables.white};
    font-size: 20px;
  }
`;

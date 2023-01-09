import styled from "styled-components";

import { variables } from "./variables";

export const AddComponent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 3rem;
`;

export const AddContentComponent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    font-size: 2rem;
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid ${variables.gray};
    outline: none;
    background: ${variables.gray};
    color: ${variables.white};
  }
`;

export const AddEditorContainer = styled.div`
  overflow: scroll;
  border: 1px solid ${variables.gray};

  /* Styling the ReactQuill */
  .quill {
    height: 100%;
    border: none;

    .ql-picker-label {
      color: ${variables.white};
      font-size: 1rem;

      &:hover {
        color: ${variables.breeze};
      }
    }
    .ql-snow {
      display: flex;
      align-items: center;
      .ql-picker-label {
        display: flex;
        align-items: center;
      }
      .ql-picker {
        height: 2rem;
        transition: all 0.15s ease;
        display: flex;
        align-items: center;
        /* padding: 0.5rem; */
        svg {
        }
        &:hover {
          .ql-picker-label {
            color: ${variables.gray};
          }
          .ql-stroke {
            stroke: ${variables.gray};
          }
          & {
            background: ${variables.white};
          }
        }
        &-options {
          background: ${variables.white};
        }

        &-item {
          color: ${variables.black};
          &:hover {
            color: ${variables.breeze};
          }
        }
      }
      .ql-stroke {
        stroke: ${variables.white};
      }
    }
  }
  .ql {
    &-selected {
      color: ${variables.breeze} !important;
    }
    &-header {
      width: calc(100% + 20px) !important;
    }

    &-bold {
      margin-left: 20px;
    }

    &-active {
      ::before {
        color: ${variables.breeze};
      }
      .ql-stroke {
        stroke: ${variables.breeze} !important;
      }
    }
    &-formats {
      button {
        &:hover {
          background: ${variables.gray};
          color: ${variables.white} !important;
          .ql-stroke {
            stroke: ${variables.white} !important;
          }
        }
      }
    }
    &-container {
      color: ${variables.white};
      height: 50vh;
    }
    &-editor {
      width: 100%;
      font-size: 1.7rem;
      word-break: break-all;
      height: 50vh;
    }
  }
`;

export const AddMenu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AddMenuItem = styled.div`
  background: ${variables.gray};
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.3rem;
  color: ${variables.white};
  border-radius: 2px;
  h1 {
    font-size: 1.8rem;
    margin: 0.4rem 0 0.6rem 0;
  }
  span {
    margin: 0.3rem 0;
  }
`;

export const AddMenuItemFile = styled.label`
  text-decoration: underline;
  cursor: pointer;
  margin: 0.8rem 0;
`;

export const AddMenuItemButtons = styled.div`
  display: flex;
  justify-content: space-between;

  :first-child {
    cursor: pointer;
    color: ${variables.breeze};
    background-color: ${variables.white};
    border: 1px solid ${variables.breeze};
    padding: 3px 5px;
  }
  :last-child {
    button {
      cursor: pointer;  
      font-size: 1.4rem;
      color: ${variables.white};
      background-color: ${variables.breeze};
      border: 1px solid ${variables.breeze};
      border-radius: 4px;
      padding: 6px 20px;
      transition: all .2s ease;
      &:hover {
        background-color: ${variables.white};
        color: ${variables.breeze};
    }
  }
`;

export const AddCatComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 0.8rem;
  color: ${variables.breeze};
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + label {
      &:before {
        content: "";
        background: ${variables.white};
        border-radius: 100%;
        border: 1px solid darken(${variables.gray}, 25%);
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: -0.2em;
        margin-right: 1em;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + label {
        &:before {
          background-color: ${variables.gray};
          box-shadow: inset 0 0 0 5px ${variables.white};
        }
      }
    }
    &:focus {
      + label {
        &:before {
          outline: none;
          border-color: ${variables.breeze};
        }
      }
    }
  }
`;

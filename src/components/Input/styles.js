import styled from "styled-components";

export const Form = styled.form`
  border: 2px solid var(--color-gray-20);
  padding: 5px;
  height: 50px;
  border-radius: 8px;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 21.5vw;

  & input {
    background: var(--color-white);
    border: none;
    outline: none;
    width: 60%;
    padding-left: 10px;
    font-size: 14px;
    color: var(--color-gray-100);
  }

  & input::placeholder {
    color: var(--color-gray-20);
  }

  & button {
    background: var(--color-primary);
    border-radius: 8px;
    padding-left: 10px;
    width: 90px;
    border: none;
    padding: 10px 15px;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-white);
  }

  @media screen and (max-width: 700px) {
    width: 90vw;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    width: 35vw;
  }
`;

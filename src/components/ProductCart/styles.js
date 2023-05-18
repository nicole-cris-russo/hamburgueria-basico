import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background: transparent;
  width: 100%;
`;

export const BoxOne = styled.div`
  margin: 5px;
  & img {
    background: var(--color-gray-20);
    border-radius: 5px;
    width: 100%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    & img {
      width: 40px;
    }
  }
`;

export const BoxTwo = styled.div`
  margin: 5px 0;
  & h3 {
    font-weight: 700;
    font-size: 14px;
    color: var(--color-gray-100);
  }
  & span {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-gray-50);
  }
`;

export const BoxThree = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding-top: 5px;
  margin: 5px;
  & button {
    font-weight: 500;
    font-size: 11px;
    background: transparent;
    border: none;
    color: var(--color-gray-50);
  }

  & span {
    font-size: 12px;
    text-align: center;
    color: var(--color-gray-100);
    font-weight: 500;
  }
`;

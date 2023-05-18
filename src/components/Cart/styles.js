import styled, { css } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 10% 65% 25%;
  width: 25%;
  height: 350px;
  border-radius: 5px;
  background: var(--color-gray-0);
  ${(props) =>
    props.productInCart.length < 1 &&
    css`
      display: grid;
      grid-template-rows: 20% 80%;
      height: 200px;
    `}

  @media screen and (max-width: 700px) {
    margin-top: 20px;
    width: 90%;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    text-align: center;
    width: 50%;
  }
`;

export const Div = styled.div`
  width: 100%;

  &:nth-child(1) {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: var(--color-primary);
    border-radius: 5px 5px 0 0;
  }
  &:nth-child(1) h3 {
    color: var(--color-white);
    font-weight: 700;
    font-size: 16px;
  }

  &:nth-child(2) ul {
    height: 100%;
    overflow-y: auto;
    padding: 8px 5px;

    border-bottom: 1px solid var(--color-gray-50);

    /* Largura da barra de rolagem */
    ::-webkit-scrollbar {
      width: 7px;
    }

    /* Fundo da barra de rolagem */
    ::-webkit-scrollbar-track-piece {
      border: none;
    }

    /* Cor do indicador de rolagem */
    ::-webkit-scrollbar-thumb:vertical,
    ::-webkit-scrollbar-thumb:horizontal {
      background-color: var(--color-gray-20);
      border-radius: 5px;
    }

    /* Cor do indicador de rolagem - ao passar o mouse */
    ::-webkit-scrollbar-thumb:vertical:hover,
    ::-webkit-scrollbar-thumb:horizontal:hover {
      background-color: var(--color-gray-50);
    }
  }
`;

export const DivEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  height: 150px;
  & h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-gray-100);
  }
  & span {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-gray-50);
  }
`;

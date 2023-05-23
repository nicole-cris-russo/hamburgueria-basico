import { styled } from "styled-components";

export const Box = styled.div`
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
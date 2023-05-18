import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  background-color: var(--color-gray-0);

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: content-box;
    padding: 10px 0 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vw;

  &:last-child {
    display: flex;
    justify-content: end;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:last-child {
      display: flex;
      justify-content: center;
    }
  }
`;

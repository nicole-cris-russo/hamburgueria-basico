import styled from "styled-components";

export const Container = styled.section`
  width: 70%;

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    gap: 20px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 330px;

    & ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      height: 330px;
      width: 90%;
      overflow-x: auto;
    }
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    & ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      height: 330px;
      width: 90%;
      overflow-x: auto;
    }
  }
`;

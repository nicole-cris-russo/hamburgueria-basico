import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 320px;
  width: 250px;
  border: 2px solid var(--color-gray-20);
  border-radius: 5px;
  background: var(--color-gray-0);
  & img {
    height: 150px;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background: var(--color-white);
  padding: 15px;
  width: 100%;
  height: 100%;

  & h3 {
    font-weight: 700;
    font-size: 18px;
  }
  & button {
    background: var(--color-primary);
    padding: 8px 10px;
    width: 90px;
    border: none;
    border-radius: 5px;
    color: var(--color-white);
  }
`;

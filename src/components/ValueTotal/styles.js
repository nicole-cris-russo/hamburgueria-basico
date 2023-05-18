import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  gap: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & button {
    width: 100%;
    height: 60px;
    background: var(--color-primary);
    border: none;
    border-radius: 5px;
    color: var(--color-white);
    font-weight: 600;
  }
`;

export const Box = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;

  & span:nth-child(1) {
    color: var(--color-gray-100);
  }

  & span:nth-child(2) {
    color: var(--color-gray-50);
  }
`;

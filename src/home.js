import styled from "styled-components";
export const Container = styled.div`
  padding: 30px;
  background-color: #fdb860;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  width: 174px;
  border-radius: 5px;
  padding: 15px 40px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  border: none;
  height: 52px;
`;

export const Header = styled.h1`
  font-size: 58px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.header};
`;
export const Text = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.header};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 50px;
  justify-content: space-between;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

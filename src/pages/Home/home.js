import styled from "styled-components";
import bg from "../../assets/bg.png";
import bodybg from "../../assets/bodybg.png";
export const Container = styled.div`
  padding: 260px 123px;
  background: url(${bg}) no-repeat;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Button = styled.button`
  background-color: #552f89;
  width: 174px;
  border-radius: 5px;
  padding: 15px 40px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  border: none;
  height: 52px;
`;
export const Wrapper = styled.div`
  background: url(${bodybg}) no-repeat;
`;

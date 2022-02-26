import styled from "styled-components";
import bg from "../../assets/bg.png";
import bodybg from "../../assets/bodybg.png";

export const Container = styled.div`
  background: url(${bg}) no-repeat;
  background-size: 100%;

  h1 {
    margin: 200px 123px 0 123px;
  }
  p {
    margin: 0px 123px 0px 123px;
    padding-bottom: 150px;
  }
`;

export const Button = styled.button`
  background-color: #eb4a8b;
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
  min-height: 100vh;
  background-size: 100%;
  h1 {
    display: flex;
    justify-content: center;
    min-width: 500px;
    padding-top: 100px;
  }
`;
export const SmallText = styled.p`
  font-size: 18px;
  font-weight: 400;
  width: 600px;
`;
export const SmallHeader = styled.h2`
  font-size: 32px;
  font-weight: 700px;
  width: 200px;
`;

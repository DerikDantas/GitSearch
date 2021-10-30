import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/colors/colors";

const animationBox = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${colors.primary};
`;

export const VectorOne = styled.img`
  position: absolute;
  left: -4.72%;
  right: 85.66%;
  top: 9.76%;
  bottom: 27.02%;
  width: 10%;
`;

export const VectorTwo = styled.img`
  position: absolute;
  left: 10.32%;
  right: 68.44%;
  top: 9.76%;
  bottom: 9.76%;
  width: 15%;
`;

export const VectorThree = styled.img`
  position: absolute;
  left: 29.55%;
  right: 51.39%;
  top: 9.76%;
  bottom: 27.02%;
  width: 10%;
`;

export const BoxSearch = styled.div`
  position: absolute;
  left: 820px;
  top: 265px;
  animation-name: ${animationBox};
  animation-duration: 1.5s;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const WellcomeTitle = styled.div`
  color: ${colors.white};
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
`;

export const SubTitle = styled.div`
  color: ${colors.blueText};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-top: 20px;
  background: linear-gradient(
    90deg,
    ${colors.secondary} 0%,
    rgba(73, 83, 184, 0.2) 100%
  );
  border-radius: 5px 0px 0px 5px;
  border: none;
  padding: 23px 30px;
  width: 340px;
  height: 80px;
  font-size: 20px;
  &::placeholder {
    color: ${colors.blueText};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${colors.blueText};
  }
  &::-ms-input-placeholder {
    color: ${colors.blueText};
  }
`;

export const ButtonSearch = styled.button`
  margin-top: 20px;
  display: grid;
  place-items: center;
  background: #4953b8;
  border-radius: 0px 5px 5px 0px;
  width: 80px;
  height: 80px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

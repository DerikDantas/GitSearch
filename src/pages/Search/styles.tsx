import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/colors/colors";

const animationBox = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  background-color: ${colors.primary};
`;

export const BoxSearch = styled.div`
  opacity: 0;
  animation-name: ${animationBox};
  animation-duration: 1.5s;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Title = styled.h1`
  color: ${colors.titles};
  text-align: center;
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

  @media(max-width: 768px) {
    width: 100%;
    height: 70px;
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

  @media(max-width: 768px) {
    width: 100px;
    height: 70px;
  }
`;

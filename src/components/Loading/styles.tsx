import styled, { keyframes } from "styled-components";

const animationLoading = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  transform: scale(0.8) translate(-50%, -50%);
  left: 50%;
  top: 50%;

  div {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #f87373;
    border-radius: 50%;
    animation: ${animationLoading} 1.2s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
  }
  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
  }
  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
  }
  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
  }
  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
  }
  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
  }
  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
  }
  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
  }
  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
  }
  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
  }
  div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
  }
  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
  }
`;

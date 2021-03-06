import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/colors/colors";

interface Props {
  open: boolean;
}

const animacaoBG = keyframes`
    0% { width: 0 }
    100% { width:  100% }
`;

const animacaoBox = keyframes`
    0% { opacity: 0 }
    100% { opacity:  1 }
`;

export const Container = styled.div`
  background-color: ${colors.background};
  height: 100vh;
  display: grid;
  place-items: center;
  animation-name: ${animacaoBG};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    height: 100%;
    padding: 10px;
    display: block;
  }
`;

export const RowBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: 100%;
  }
`;

export const BoxRepositorys = styled.div<Props>`
  background-color: ${colors.primary};
  position: relative;
  left: -10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 500px;
  display: ${(props) => (props.open ? "block" : "none")};
  width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 15px;
    left: 0px;
    overflow-x: hidden;
  }
`;

export const CloseButton = styled.button<Props>`
  background-color: ${colors.background};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  position: absolute;
  top: 13px;
  right: 13px;
  display: ${(props) => (props.open ? "block" : "none")};
  &:hover {
    box-shadow: 0px 0px 10px ${colors.secondary};
  }
`;

export const BoxProfile = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  border-radius: 15px;
  padding: 20px;
  width: ${(props) => (props.open ? "25%" : "50%")};
  height: 500px;
  opacity: 0;
  overflow-y: auto;
  position: relative;
  z-index: 99;
  animation-name: ${animacaoBox};
  animation-duration: 1s;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid ${colors.primary};
  padding: 3px;
  box-shadow: 0px 0px 10px ${colors.secondary};

  @media (max-width: 768px) {
    width: 125px;
    height: 125px;
  }
`;

export const Name = styled.h1`
  color: ${colors.titles};
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
  font-size: 27px;
`;

export const Bio = styled.p`
  color: ${colors.blueText};
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`;

export const CardInfos = styled.div`
  background-color: ${colors.background};
  padding: 10px 20px;
  border-radius: 10px;

  p {
    color: ${colors.text};
  }

  @media (max-width: 768px) {
    &:nth-child(3) {
      margin-top: 15px;
    }
  }
`;

export const ContainerRepository = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  width: 200px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
`;

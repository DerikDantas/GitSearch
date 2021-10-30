import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

export const Container = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const Button = styled.button`
  background-color: ${colors.background};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 10px ${colors.secondary};
  }
`;

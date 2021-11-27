import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

export const Container = styled.a`
  background-color: ${colors.background};
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 0;
  width: 100%;
  display: block;
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${colors.titles};
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 5px 18px;
    border: 2px solid ${colors.text};
    border-radius: 26px;
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const Description = styled.p`
  color: ${colors.text};
  margin-top: 5px;
  font-size: 14px;

  @media (max-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const TextInfo = styled.p`
  color: ${colors.blueText};
  margin-top: 5px;
  font-size: 14px;

  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
`;

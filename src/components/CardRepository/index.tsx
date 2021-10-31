import moment from "moment";
import React from "react";
import { Container, Description, Row, TextInfo, Title } from "./styles";

interface IProps {
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  visibility: string;
}

const CardRepository: React.FC<IProps> = ({
  name,
  description,
  html_url,
  language,
  created_at,
  visibility,
}) => {
  return (
    <Container href={html_url} target="_blank">
      <Title>
        {name} <span>{visibility}</span>
      </Title>
      <Description>{description}</Description>
      <Row>
        <TextInfo>{language || 'Não informado'}</TextInfo>
        <TextInfo><b>|</b></TextInfo>
        <TextInfo>{moment(created_at).locale('pt-br').format('DD/MM/YYYY')}</TextInfo>
      </Row>
    </Container>
  );
};

export default CardRepository;

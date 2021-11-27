import {
  BoxSearch,
  ButtonSearch,
  Container,
  Input,
  Row,
  SubTitle,
  Title,
  WellcomeTitle,
} from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { colors } from "../../assets/colors/colors";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ErrorText from "../../components/ErrorText/ErrorText";

const Search: React.FC = () => {
  const { searchUser, error } = useContext(GlobalContext);
  const [selectUser, setSelectUser] = useState<string>("");

  return (
    <Container>
      <BoxSearch>
        <Title>Git Search</Title>
        <WellcomeTitle>Bem-vindo</WellcomeTitle>
        <SubTitle>Pesquise um usuário git para ver o perfil</SubTitle>
        <Row>
          <Input
            value={selectUser}
            placeholder="Digite aqui"
            onChange={(e) => setSelectUser(e.target.value)}
          />
          <ButtonSearch
            onClick={() => {
              searchUser(selectUser);
            }}
          >
            <BsArrowRight size={30} color={colors.white} />
          </ButtonSearch>
        </Row>
        <ErrorText error={error} />
      </BoxSearch>
    </Container>
  );
};

export default Search;

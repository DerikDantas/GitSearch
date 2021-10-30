import {
  BoxSearch,
  ButtonSearch,
  Container,
  Input,
  Row,
  SubTitle,
  VectorOne,
  VectorThree,
  VectorTwo,
  WellcomeTitle,
} from "./styles";
import imgVector from "../../assets/images/Vectors/Vector.png";
import { BsArrowRight } from "react-icons/bs";
import { colors } from "../../assets/colors/colors";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Search: React.FC = () => {
  const { searchUser } = useContext(GlobalContext);
  const [selectUser, setSelectUser] = useState("");

  return (
    <Container>
      <VectorOne src={imgVector} />
      <VectorTwo src={imgVector} />
      <VectorThree src={imgVector} />

      <BoxSearch>
        <WellcomeTitle>Bem-vindo</WellcomeTitle>
        <SubTitle>Pesquise um usuário para ver o perfil</SubTitle>
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
      </BoxSearch>
    </Container>
  );
};

export default Search;

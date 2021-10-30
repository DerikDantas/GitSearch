import { Button, Container } from "./styles";
import { IoMdArrowBack } from "react-icons/io";
import { colors } from "../../assets/colors/colors";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const BackButton: React.FC = () => {
  const { handlePage } = useContext(GlobalContext);

  return (
    <Container>
      <Button onClick={() => handlePage("search")}>
        <IoMdArrowBack size={20} color={colors.black} />
      </Button>
    </Container>
  );
};

export default BackButton;

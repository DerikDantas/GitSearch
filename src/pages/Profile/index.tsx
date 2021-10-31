import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import BackButton from "../../components/BackButton/";
import CardRepository from "../../components/CardRepository";
import { GlobalContext } from "../../context/GlobalContext";
import {
  Bio,
  BoxProfile,
  BoxRepositorys,
  Button,
  CardInfos,
  CloseButton,
  Container,
  ContainerRepository,
  Name,
  ProfileImg,
  Row,
  RowBox,
} from "./styles";

const Profile: React.FC = () => {
  const { dataUser, getRepositorys, listRepository } =
    useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <RowBox>
        <BoxProfile className='scroll-1' style={{ width: open ? "25%" : "50%" }}>
          <BackButton />
          <CloseButton
            style={{ display: open ? "block" : "none" }}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <AiOutlineClose />
          </CloseButton>
          <ProfileImg src={dataUser.avatar_url} />
          <Name>{dataUser.name}</Name>
          <Bio>{dataUser.bio}</Bio>
          <Row>
            <CardInfos style={{ margin: open ? "10px 0" : "" }}>
              <p>
                <b>{dataUser.followers}</b> | Seguidores
              </p>
            </CardInfos>
            <CardInfos style={{ margin: open ? "10px 0" : "" }}>
              <p>
                <b>{dataUser.following}</b> | Seguindo
              </p>
            </CardInfos>
            <CardInfos style={{ margin: open ? "10px 0" : "" }}>
              <p>
                <b>{dataUser.public_repos}</b> | Repositórios Públicos
              </p>
            </CardInfos>
          </Row>
          <Button
            onClick={() => {
              getRepositorys(dataUser.login);
              setOpen((prev) => !prev);
            }}
          >
            Ver repositórios
          </Button>
        </BoxProfile>
        <BoxRepositorys style={{ width: open ? "50%" : "0", padding: open ? '20px' : '0' }}>
          <ContainerRepository className="scroll-1">
            {listRepository.map((item) => {
              return (
                <CardRepository
                  name={item.name}
                  description={item.description}
                  html_url={item.html_url}
                  language={item.language}
                  created_at={item.created_at}
                  visibility={item.visibility}
                />
              );
            })}
          </ContainerRepository>
        </BoxRepositorys>
      </RowBox>
    </Container>
  );
};

export default Profile;

import { useContext } from "react";
import BackButton from "../../components/BackButton/";
import { GlobalContext } from "../../context/GlobalContext";
import {
  Bio,
  BoxProfile,
  CardInfos,
  Container,
  Name,
  ProfileImg,
  Row,
} from "./styles";

const Profile: React.FC = () => {
  const { dataUser } = useContext(GlobalContext);

  return (
    <Container>
      <BoxProfile>
        <BackButton />
        <ProfileImg src={dataUser.avatar_url} />
        <Name>{dataUser.name}</Name>
        <Bio>{dataUser.bio}</Bio>
        <Row>
          <CardInfos>
            <p>
              <b>{dataUser.followers}</b> | Seguidores
            </p>
          </CardInfos>
          <CardInfos>
            <p>
              <b>{dataUser.following}</b> | Seguindo
            </p>
          </CardInfos>
          <CardInfos>
            <p>
              <b>{dataUser.public_repos}</b> | Repositórios Públicos
            </p>
          </CardInfos>
        </Row>
      </BoxProfile>
    </Container>
  );
};

export default Profile;

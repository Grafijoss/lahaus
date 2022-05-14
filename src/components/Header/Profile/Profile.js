import {
  ProfileContainer,
  HeaderProfile,
  ButtonProfile,
  CircleMessages,
  Avatar,
  InfoHeader,
  H2,
  P,
  SplitProfile
} from "./Styles";

const Profile = () => {
  return (
    <ProfileContainer>
      <HeaderProfile>
        <Avatar bg="./images/profile.jpg" />
        <InfoHeader>
          <H2>Jose Montenegro</H2>
          <P>Ver perfil</P>
        </InfoHeader>
      </HeaderProfile>
      <SplitProfile />
      <ButtonProfile>
        <P>Mensajes</P> <CircleMessages>2</CircleMessages>
      </ButtonProfile>
      <ButtonProfile>
        <P>Cerrar sesión</P>
      </ButtonProfile>
    </ProfileContainer>
  );
};

export default Profile;

import Header from "../Header/Header";
import { MainContainer } from "./Styles";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default AppLayout;

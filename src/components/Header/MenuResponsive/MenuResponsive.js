import { ButtonProfile, P, SplitProfile } from "../Profile/Styles";
import {
  CoverMenuResponsive,
  ContainerMenuResponsive,
  NavResponsive,
  CloseIcon
} from "./Styles";
import Profile from "../Profile/Profile";
import plus from "../../../icons/plus.svg";

const MenuResponsive = ({ handlerCloseMenuMobile }) => {
  const closeMenu = () => handlerCloseMenuMobile();

  return (
    <>
      <CoverMenuResponsive onClick={closeMenu} />
      <ContainerMenuResponsive>
        <CloseIcon onClick={closeMenu}>
          <img src={plus} alt="icono cerrar menu para mobile" />
        </CloseIcon>
        <NavResponsive>
          <ButtonProfile>
            <P>Cundinamarca</P>
          </ButtonProfile>
          <ButtonProfile>
            <P>Antioquia</P>
          </ButtonProfile>
          <ButtonProfile>
            <P>Recursos</P>
          </ButtonProfile>
        </NavResponsive>
        <SplitProfile />
        <Profile />
      </ContainerMenuResponsive>
    </>
  );
};

export default MenuResponsive;

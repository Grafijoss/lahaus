import { useState, useRef } from "react";

import logo from "../../icons/logo.svg";
import typo from "../../icons/typo.svg";
import bars from "../../icons/bars.svg";
import arrow from "../../icons/arrow.svg";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

import {
  Header as BaseHeader,
  LogoTypo,
  Logo,
  Typo,
  BurgerMenu,
  Menu,
  MenuList,
  MenuItem,
  PerfilMenuItem,
  HeaderButton,
  DropDownContainer,
  DropDownArrow
} from "./Styles";

const Header = () => {
  const [showPerfil, setShowPerfil] = useState(false);

  const buttonRef = useRef(null);

  const tooglePerfilHandler = () => {
    setShowPerfil(!showPerfil);
  };

  const closePerfilHandler = () => {
    setShowPerfil(false);
  };

  return (
    <BaseHeader>
      <BurgerMenu hasNotifications>
        <img src={bars} alt="Icon del logo Lahaus" />
      </BurgerMenu>
      <LogoTypo>
        <Logo>
          <img src={logo} alt="Icon del logo Lahaus" />
        </Logo>
        <Typo>
          <img src={typo} alt="Typo del logo Lahaus" />
        </Typo>
      </LogoTypo>

      <Menu>
        <MenuList>
          <MenuItem>
            <HeaderButton>Cundinamarca</HeaderButton>
          </MenuItem>
          <MenuItem>
            <HeaderButton>Antioquia</HeaderButton>
          </MenuItem>
          <MenuItem>
            <HeaderButton>Recursos</HeaderButton>
          </MenuItem>
          <PerfilMenuItem>
            <DropDownContainer ref={buttonRef} onClick={tooglePerfilHandler}>
              Mi Perfil
              <DropDownArrow hasNotifications>
                <img src={arrow} alt="Boton para abrir perfil" />
              </DropDownArrow>
              {showPerfil && (
                <DropDownMenu
                  buttonRef={buttonRef}
                  closePerfilHandler={closePerfilHandler}
                />
              )}
            </DropDownContainer>
          </PerfilMenuItem>
        </MenuList>
      </Menu>
    </BaseHeader>
  );
};

export default Header;

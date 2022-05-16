import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from 'react-router-dom';

import logo from "../../icons/logo.svg";
import typo from "../../icons/typo.svg";
import bars from "../../icons/bars.svg";
import arrow from "../../icons/arrow.svg";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MenuResponsive from "./MenuResponsive/MenuResponsive";

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
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const isDesktop = useMediaQuery("only screen and (min-width: 960px)");

  const buttonRef = useRef(null);

  const handlerOpenMenuMobile = () => setShowMenuMobile(true);

  const handlerCloseMenuMobile = () => setShowMenuMobile(false);

  const tooglePerfilHandler = () => {
    setShowPerfil(!showPerfil);
  };

  const closePerfilHandler = () => {
    setShowPerfil(false);
  };

  useEffect(() => {
    if (isDesktop) {
      handlerCloseMenuMobile();
    }
  }, [isDesktop]);

  return (
    <BaseHeader data-testid="header-container">
      <BurgerMenu hasNotifications onClick={handlerOpenMenuMobile}>
        <img src={bars} alt="Icon del logo Lahaus" />
      </BurgerMenu>
      <Link to='/'>
        <LogoTypo>
          <Logo>
            <img src={logo} alt="Icon del logo Lahaus" />
          </Logo>
          <Typo>
            <img src={typo} alt="Typo del logo Lahaus" />
          </Typo>
        </LogoTypo>
      </Link>

      {!isDesktop && showMenuMobile && (
        <MenuResponsive handlerCloseMenuMobile={handlerCloseMenuMobile} />
      )}

      {isDesktop && (
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
              <DropDownContainer ref={buttonRef} onClick={tooglePerfilHandler} data-testid="open-perfil" >
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
      )}
    </BaseHeader>
  );
};

export default Header;

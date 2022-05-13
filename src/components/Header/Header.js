import { withTheme } from "styled-components";
import logo from "../../icons/logo.svg";
import typo from "../../icons/typo.svg";
import bars from "../../icons/bars.svg";
import arrow from "../../icons/arrow.svg";

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
  DropDownContainer,
  DropDownArrow
} from "./Styles";

const Header = ({ theme }) => {
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
          <MenuItem>Cundinamarca</MenuItem>
          <MenuItem>Antioquia</MenuItem>
          <MenuItem>Recursos</MenuItem>
          <PerfilMenuItem>
            Mi Perfil
            <DropDownContainer>
              <DropDownArrow hasNotifications>
                <img src={arrow} alt="Boton para abrir perfil" />
              </DropDownArrow>
            </DropDownContainer>
          </PerfilMenuItem>
        </MenuList>
      </Menu>
    </BaseHeader>
  );
};

export default withTheme(Header);

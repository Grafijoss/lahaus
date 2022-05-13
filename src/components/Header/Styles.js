import styled, { css } from "styled-components";

const Header = styled.header`
  align-items: center;
  border-bottom: solid 1px var(--background-gray);
  display: flex;
  height: 60px;
  padding: 0 18px;
  width: 100%;
  @media (min-width: 960px) {
    justify-content: space-between;
    padding: 0 72px;
  }
`;

const IconContainer = styled.div`
  img {
    width: 100%;
  }
`;

const Logo = styled(IconContainer)`
  width: 30.55px;
  @media (min-width: 960px) {
    width: 23.29px;
  }
`;

const Typo = styled(IconContainer)`
  display: none;
  margin-left: 12.11px;
  @media (min-width: 960px) {
    display: block;
  }
`;

const LogoTypo = styled.div`
  align-items: center;
  display: flex;
`;

const NotificationsAlert = css`
  position: relative;
  &:after {
    background: var(--background-blue);
    border-radius: 12px;
    display: ${({ hasNotifications }) => (hasNotifications ? "block" : "none")};
    content: "";
    height: 12px;
    position: absolute;
    top: -3px;
    right: -3px;
    width: 12px;
  }
`;

const BurgerMenu = styled(IconContainer)`
  ${NotificationsAlert}
  display: block;
  margin-right: 10px;
  @media (min-width: 960px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: none;
  @media (min-width: 960px) {
    display: block;
  }
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  font-size: 16px;
  margin-left: 40px;
`;

const PerfilMenuItem = styled(MenuItem)`
  align-items: center;
  display: flex;
  font-weight: 500;
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const DropDownArrow = styled.div`
  ${NotificationsAlert}
  margin: 0 0 0 10px;
  width: 12.76px;
  &:after {
    right: -10px;
    top: -10px;
  }
`;

export {
  Header,
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
};

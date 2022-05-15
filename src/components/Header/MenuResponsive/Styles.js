import styled from "styled-components";
import { IconContainer } from "../../common/css";

const CoverMenuResponsive = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const ContainerMenuResponsive = styled.div`
  background: var(--background-body);
  cursor: pointer;
  height: 100%;
  left: 0;
  padding-top: 60px;
  position: fixed;
  top: 0;
  width: 250px;
  z-index: 110;
`;

const NavResponsive = styled.nav``;

const CloseIcon = styled(IconContainer)`
  background: var(--gray-light);
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
  transform: rotate(45deg);
  width: 37.5px;
`;

export {
  CoverMenuResponsive,
  ContainerMenuResponsive,
  NavResponsive,
  CloseIcon
};

import styled from "styled-components";

const Header = styled.header`
  border-bottom: solid 1px var(--background-gray);
  display: flex;
  height: 60px;
  padding: 0 72px;
  width: 100%;
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

export { Header, LogoTypo, Logo, Typo };

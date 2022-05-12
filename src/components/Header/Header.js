import { withTheme } from "styled-components";
import logo from "../../icons/logo.svg";
import typo from "../../icons/typo.svg";

import { Header as BaseHeader, LogoTypo, Logo, Typo } from "./Styles";

const Header = ({ theme }) => {
  return (
    <BaseHeader>
      <LogoTypo>
        <Logo>
          <img src={logo} />
        </Logo>
        <Typo>
          <img src={typo} />
        </Typo>
      </LogoTypo>
    </BaseHeader>
  );
};

export default withTheme(Header);

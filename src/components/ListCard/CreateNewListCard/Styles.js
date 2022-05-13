import styled from "styled-components";
import { ImagesContainer } from "../Styles";
import { IconContainer } from "../../common/css";
import { H2 as BaseH2 } from "../../common/typography";

const AddList = styled(ImagesContainer)`
  align-items: center;
  display: flex;
  justify-content: center;
  background: var(--blue-md);
`;

const AddListIcon = styled(IconContainer)`
  width: 37.5px;
`;

const H2 = styled(BaseH2)`
  color: var(--blue-sky);
  margin-top: 21px;
  text-align: center;
`;

export { AddList, AddListIcon, H2 };

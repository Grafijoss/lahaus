import styled, { css } from "styled-components";
import { H2 as baseH2, P as baseP } from "../common/typography";

const CardContainer = styled.article`
  overflow: hidden;
  padding-bottom: 40px;
  width: 292px;
`;

const ImagesContainer = styled.div`
  background-image: url("./images/default.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 196px;
  overflow: hidden;
  width: 100%;
`;

const textWithEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const H2 = styled(baseH2)`
  line-height: 24px;
  margin: 21px 0;
  padding-right: 35px;
  ${textWithEllipsis}
`;

const P = styled(baseP)``;

export { CardContainer, ImagesContainer, H2, P };

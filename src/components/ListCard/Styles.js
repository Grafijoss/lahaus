import styled, { css } from "styled-components";
import { H2 as baseH2, P as baseP } from "../common/typography";
import { occupiesAllTheSpace, backgroundCover } from "../common/css";

const CardContainer = styled.article`
  overflow: hidden;
  padding-bottom: 40px;
  width: 292px;
`;

const ImagesContainer = styled.div`
  ${backgroundCover}
  background-image: url("./images/default.png");
  border-radius: 10px;
  height: 196px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const GaleryImage = css`
  ${backgroundCover}
  background-image: ${({ bg }) => `url(${bg})`};
  border-radius: 10px;
  border: solid 1px white;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
`;

const InfoImages = styled.div`
  ${occupiesAllTheSpace}
  align-items: center;
  background: rgba(1, 45, 38, 0.7);
  color: white;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  justify-content: right;
  text-align: right;
  z-index: 1;

  &:after {
    content: ${({ counter }) => `"${counter}"`};
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    width: 21%;
  }
`;

const FirstImage = styled.div`
  ${GaleryImage}
  width: 100%;
  z-index: 0;
`;

const SecondImage = styled.div`
  ${GaleryImage}
  width: 50%;
  z-index: 3;
`;

const ThirdImage = styled.div`
  ${GaleryImage}
  width: 80%;
  z-index: 2;
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

export {
  CardContainer,
  ImagesContainer,
  H2,
  P,
  FirstImage,
  SecondImage,
  ThirdImage,
  InfoImages
};

import styled, { css } from "styled-components";

const IconContainer = styled.div`
  img {
    width: 100%;
  }
`;

const centerChildren = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const occupiesAllTheSpace = css`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const backgroundCover = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const textWithEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  IconContainer,
  occupiesAllTheSpace,
  backgroundCover,
  textWithEllipsis,
  centerChildren
};

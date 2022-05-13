import styled, { css } from "styled-components";

const h1 = css`
  color: var(--green-jungle);
  font-weight: 600;
`;

const H1 = styled.h1`
  ${h1}
  font-size: 22px;
  line-height: 32px;
  @media (min-width: 960px) {
    font-size: 30px;
  }
`;

const H2 = styled.h2`
  ${h1}
  font-size: 18px;
  line-height: 18px;
`;

export { H1, H2 };

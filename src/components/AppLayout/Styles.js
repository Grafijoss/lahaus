import styled from "styled-components";

const MainContainer = styled.main`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 32px 24px;
  width: 100%;

  @media (min-width: 960px) {
    padding: 60px 0;
  }
`;

export { MainContainer };

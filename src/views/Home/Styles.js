import styled from "styled-components";

import { H1 as BaseH1 } from "../../components/common/typography";

const H1 = styled(BaseH1)`
  margin-bottom: 60px;
  text-align: center;
`;

const ListCardContainer = styled.div`
  display: grid;
  gap: 33px;
  grid-template-columns: repeat(1, 292px);
  justify-content: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 292px);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 292px);
  }
`;

export { H1, ListCardContainer };

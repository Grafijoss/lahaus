import styled from "styled-components";

import { H1 as BaseH1 } from "../../components/common/typography";

const H1 = styled(BaseH1)`
  margin-bottom: 60px;
  text-align: center;
`;

const ListEstatesContainer = styled.div`
  display: grid;
  gap: 33px;
  grid-template-columns: repeat(1, 100%);
  justify-content: center;
`;

export { H1, ListEstatesContainer };
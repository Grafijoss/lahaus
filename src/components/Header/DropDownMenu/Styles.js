import styled from "styled-components";

const DropDownContainer = styled.div`
  background: var(--background-body);
  box-shadow: var(--color-shadow-large);
  border-radius: 10px;
  border: solid 1px var(--gray-light);
  padding: 20px;
  position: absolute;
  right: 0;
  top: 20px;
  width: 300px;
  z-index: 10;
`;

export { DropDownContainer };

import styled from "styled-components";

const BaseIcon = styled.img`
  margin: 0;
`;

const Icon = (props) => {
  return <BaseIcon {...props} />;
};

export { Icon, BaseIcon };

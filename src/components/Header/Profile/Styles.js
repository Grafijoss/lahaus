import {
  backgroundCover,
  textWithEllipsis,
  centerChildren
} from "../../common/css";
import { H2 as baseH2, P as baseP } from "../../common/typography";
import styled from "styled-components";

const ProfileContainer = styled.article``;

const ButtonProfile = styled.div`
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: left;
  width: 100%;
  &:hover {
    background: var(--gray-light);
  }
`;

const HeaderProfile = styled(ButtonProfile)`
  align-items: center;
  display: flex;
`;

const CircleMessages = styled.span`
  ${centerChildren}
  background: var(--background-blue);
  border-radius: 50%;
  color: white;
  font-size: 10px;
  height: 20px;
  margin-left: 5px;
  width: 20px;
`;

const Avatar = styled.div`
  ${backgroundCover}
  background-image: ${({ bg }) => `url(${bg})`};
  border: solid 2px var(--gray-light);
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const InfoHeader = styled.div`
  margin-left: 20px;
`;

const H2 = styled(baseH2)`
  line-height: 24px;
  margin: 0;
  ${textWithEllipsis}
`;

const P = styled(baseP)``;

const SplitProfile = styled.div`
  background: var(--gray-light);
  height: 1px;
  margin: 10px 0;
  width: 100%;
`;

export {
  ProfileContainer,
  HeaderProfile,
  ButtonProfile,
  CircleMessages,
  Avatar,
  InfoHeader,
  H2,
  P,
  SplitProfile
};

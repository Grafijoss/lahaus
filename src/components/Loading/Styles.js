import styled, { keyframes } from 'styled-components';

const ellipsis = keyframes`
  to {
    width: 1.25em;    
  }
`;

const LoadingContainer = styled.div`
    position: relative;
    height: 45px;
    width: 100%;
`;

const Animation = styled.div`
    font-size: 24px;
    font-family: 'silkasemibold';
    left: 50%;
    position: absolute;
    transform: translateX(-70px);
    &:after {
        animation-name: ${ellipsis};
        animation-duration: 900ms;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4,end);
        content: "...";
        display: inline-block;
        overflow: hidden;
        vertical-align: bottom;
        width: 0px;
    }
`;

export {
    LoadingContainer,
    Animation,
}
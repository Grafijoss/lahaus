import styled from 'styled-components';
import { backgroundCover } from '../common/css';
import { H2 as baseH2, P as baseP } from '../common/typography'


const EstateCard = styled.article`
  background: var(--background-body);
  box-shadow: var(--color-shadow-large);
  border-radius: 10px;
  border: solid 1px var(--gray-light);
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: auto;
  width: 100%;

  @media (min-width: 620px) {
    flex-direction: row;
    height: 300px;
  }
`;

const Image = styled.div`
    ${backgroundCover}
    background-image: ${({bg}) => `url(${bg})`};
    border-radius: 10px;
    height: 300px; 
    width: 100%;

    @media (min-width: 620px) {
        height: 100%;
        width: 290px; 
    }
`;

const InfoCard = styled.div`
    height: auto;
    padding: 20px 0;
    width: 100%;
    
    @media (min-width: 620px) {
        padding: 0 20px;
        width: calc(100% - 290px);
    }
`;

const H2 = styled(baseH2)`
    margin-bottom: 20px;
`;

const P = styled(baseP)`
    margin-bottom: 10px;
`;

const Price = styled(baseH2).attrs({
    as: 'h3'
})`
    font-size: 24px;
    margin-top: 20px;
`;


export { EstateCard, Image, InfoCard, H2, P, Price }

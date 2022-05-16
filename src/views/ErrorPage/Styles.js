import styled from 'styled-components';
import {centerChildren} from '../../components/common/css'; 
import {H1 as baseH1} from '../../components/common/typography'; 


const NotFoundContainer = styled.div`
    ${centerChildren}
    padding: 100px 0;
    width: 100%;
`;

const H1 = styled(baseH1)`
    font-size: 18px;

    @media(min-width: 960px) {
        font-size: 32px;
    } 
`;

export {
    NotFoundContainer,
    H1,
}

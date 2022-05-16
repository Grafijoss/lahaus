import {Helmet} from 'react-helmet';
import {
    NotFoundContainer,
    H1,
} from './Styles'

const ErrorPage = () => {
    return(
        <NotFoundContainer>
            <Helmet>
                <title>¡Oops! La página no existe</title>
            </Helmet>
            <H1>¡Oops! La página no existe</H1>
        </NotFoundContainer>
    )
}

export default ErrorPage;
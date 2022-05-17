import NumberFormat from 'react-number-format';
import { EstateCard, Image, InfoCard, H2, P, Price  } from './Styles'

const EstatesCard = ({
    city,
    country,
    gallery_urls,
    name,
    min_price,
    stratum,
}) => {

    const image = gallery_urls[0];

    return(
        <EstateCard>
            <Image bg={image}></Image>
            <InfoCard>
                <H2>
                    {name}
                </H2>
                <P>
                    {city} - {country}
                </P>
                <P>
                    Estrato: {stratum}
                </P>
                <Price>
                    <NumberFormat value={min_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </Price>
            </InfoCard>
        </EstateCard>
    ) 
}

export default EstatesCard;
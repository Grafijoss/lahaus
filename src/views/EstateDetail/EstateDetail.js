import { useEffect, useState } from 'react';
import { H1, ListEstatesContainer } from "./Styles";
import EstatesCard from "../../components/EstatesCard/EstatesCard";
import {useParams} from "react-router-dom"
import useGetCollections from "../../hooks/useGetCollections";
import {Helmet} from 'react-helmet';
import Loading from '../../components/Loading/Loading'

const EstateDetail = () => {
    const {estateId} = useParams()
    const { collections, loading } = useGetCollections();
    const [ estate, setEstate ] = useState({});

    useEffect(() => {
    if(collections.length > 0) {
        const currentEstate = collections.find(est => est.id === estateId);
        setEstate(currentEstate);
    } 
    }, [collections]);

    const {
        name,
        entries,
    } = estate || {};

    return (
    <>
        <Helmet>
        <title>{name}</title>
        </Helmet>
        <H1 data-testid="estate-detail">{name}</H1>

        {loading && (
            <Loading />
        )}

        {entries?.length > 0 && !loading && (
            <ListEstatesContainer>
                {entries.map(({id, attributes}) => (
                    <EstatesCard key={id} {...attributes} />
                ))}
            </ListEstatesContainer>
        )}

        

    </>
    );
};

export default EstateDetail;
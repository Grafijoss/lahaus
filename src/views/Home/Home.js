import { ListCard, CreateNewListCard } from "../../components/ListCard";
import { H1, ListCardContainer } from "./Styles";
import useGetCollections from "../../hooks/useGetCollections";
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const { collections, loading } = useGetCollections();

  return (
    <>
      <Helmet>
        <title>Listas de favoritos</title>
      </Helmet>
      <H1>Listas de favoritos</H1>
      
      {loading ? (
        <Loading />
      ) : (
        <ListCardContainer>
          {collections.map((collection) => (
            <Link key={collection?.id} to={`/estates/${collection?.id}`}>
              <ListCard  {...collection} />
            </Link>
          ))}
          <CreateNewListCard />
        </ListCardContainer>
      )}
    </>
  );
};

export default Home;

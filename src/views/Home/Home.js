import { ListCard, CreateNewListCard } from "../../components/ListCard";
import { H1, ListCardContainer } from "./Styles";
import useGetCollections from "../../hooks/useGetCollections";
import {Helmet} from 'react-helmet';

const Home = () => {
  const { collections } = useGetCollections();

  return (
    <>
      <Helmet>
        <title>Listas de favoritos</title>
      </Helmet>
      <H1>Listas de favoritos</H1>
      <ListCardContainer>
        {collections.map((collection) => (
          <ListCard key={collection.id} {...collection} />
        ))}
        <CreateNewListCard />
      </ListCardContainer>
    </>
  );
};

export default Home;

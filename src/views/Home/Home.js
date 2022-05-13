import { ListCard, CreateNewListCard } from "../../components/ListCard";
import { H1, ListCardContainer } from "./Styles";

const Home = () => {
  return (
    <>
      <H1>Listas de favoritos</H1>
      <ListCardContainer>
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <CreateNewListCard />
      </ListCardContainer>
    </>
  );
};

export default Home;

import { CardContainer, ImagesContainer, H2, P } from "./Styles";

const ListCard = ({ name, entries }) => {
  return (
    <CardContainer>
      <ImagesContainer />
      <H2>{name}</H2>
      <P>{entries.length} propiedades guardadas</P>
    </CardContainer>
  );
};

export default ListCard;

import { CardContainer } from "../Styles";
import { AddList, AddListIcon, H2 } from "./Styles";
import plus from "../../../icons/plus.svg";

const CreateNewListCard = () => {
  return (
    <CardContainer>
      <AddList>
        <AddListIcon>
          <img src={plus} alt="icono para agregar nueva coleccion" />
        </AddListIcon>
      </AddList>
      <H2 data-testid="title">Crear una nueva lista</H2>
    </CardContainer>
  );
};

export default CreateNewListCard;

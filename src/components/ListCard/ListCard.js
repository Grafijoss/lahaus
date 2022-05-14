import { useEffect, useState } from "react";
import { isEmptyArray } from "../../utils/core";
import {
  CardContainer,
  ImagesContainer,
  H2,
  P,
  FirstImage,
  SecondImage,
  ThirdImage,
  InfoImages
} from "./Styles";

const ListCard = ({ name, entries }) => {
  const [images, setImages] = useState([]);

  const showInfoCounterImages = images.length > 2;

  const InfoCounterImages = `+${images.length - 2}`;

  const getImages = () => {
    return entries.reduce((acc, current) => {
      const {
        attributes: { gallery_urls }
      } = current;
      return [...acc, ...gallery_urls];
    }, []);
  };

  useEffect(() => {
    if (!isEmptyArray(entries)) {
      setImages(getImages());
    }
  }, [entries]);

  return (
    <CardContainer>
      <ImagesContainer>
        {images[0] && <FirstImage bg={images[0]} />}
        {showInfoCounterImages && <InfoImages counter={InfoCounterImages} />}
        {images[1] && <SecondImage bg={images[1]} />}
        {images[2] && <ThirdImage bg={images[2]} />}
      </ImagesContainer>
      <H2>{name}</H2>
      <P>{entries.length} propiedades guardadas</P>
    </CardContainer>
  );
};

export default ListCard;

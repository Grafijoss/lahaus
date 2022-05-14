/* eslint-disable react-hooks/exhaustive-deps */
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
      getImages()
      setImages(getImages());
    }
  }, [entries]);

  return (
    <CardContainer data-testid="listcard">
      <ImagesContainer>
        {images[0] && <FirstImage data-testid="image-galery" bg={images[0]} />}
        {showInfoCounterImages && <InfoImages counter={InfoCounterImages} />}
        {images[1] && <SecondImage data-testid="image-galery" bg={images[1]} />}
        {images[2] && <ThirdImage data-testid="image-galery" bg={images[2]} />}
      </ImagesContainer>
      <H2 data-testid="name">{name}</H2>
      <P data-testid="entries">{entries?.length || 0} propiedades guardadas</P>
    </CardContainer>
  );
};

export default ListCard;

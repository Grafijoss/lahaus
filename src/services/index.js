import axios from "axios";
import { mapCollections } from "../mappers";

const getAll = () => {
  return axios(
    "https://lh-real-estates-challenge-api.herokuapp.com/real-estates"
  ).then(({ data }) => {
    return mapCollections(data);
  });
};

export { getAll };

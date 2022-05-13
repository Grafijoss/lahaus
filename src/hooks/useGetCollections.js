import { useEffect, useState } from "react";
import { getAll } from "../services";

export default function useGetStates() {
  const [collections, getCollections] = useState([]);

  const fetchEstatesData = async () => {
    try {
      const res = await getAll();
      getCollections(res);
    } catch (err) {
      console.log(`Error llamando al servicio ${err}`);
    }
  };

  useEffect(() => {
    fetchEstatesData();
  }, []);
  return {
    collections
  };
}

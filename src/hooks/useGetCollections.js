import { useEffect, useState } from "react";
import { getAll } from "../services";

export default function useGetStates() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchEstatesData = async () => {
    setLoading(true);
    try {
      const res = await getAll();
      setCollections(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(`Error llamando al servicio ${err}`);
    }
  };

  useEffect(() => {
    fetchEstatesData();
  }, []);
  return {
    collections: collections || [],
    loading,
    error
  };
}

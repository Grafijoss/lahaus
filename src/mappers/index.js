const mapEntries = ({ collectionsIds, estates }) => {
  return estates.filter((estate) => {
    return collectionsIds.includes(parseInt(estate.id, 10));
  });
};

const mapCollections = ({ data: collections, included: estates }) => {
  return collections.map((collection) => {
    const {
      id,
      attributes: { name, real_estate_ids }
    } = collection;

    return {
      id,
      name,
      entries: mapEntries({
        collectionsIds: real_estate_ids,
        estates
      })
    };
  });
};

export { mapCollections, mapEntries };

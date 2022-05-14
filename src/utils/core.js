const isEmptyObject = (obj) => Object.keys(obj).length === 0;

const isEmptyArray = (array) => array === undefined || array.length === 0;

export { isEmptyObject, isEmptyArray };

export const normalizeItemsForSimpleSearch = (items) => {
  let arrayItems = [];
  items.map((item) => {
    arrayItems.push({ name: item });
  });
  return arrayItems;
};

export const normalizeObjectAsArrayForSimpleSearch = (dataSource) => {
  let resultArray = [];

  Object.entries(dataSource).map((item) =>
    resultArray.push({
      name: item[0],
      items: normalizeItemsForSimpleSearch(item[1]),
    })
  );
  return resultArray;
};

export const normalizeArrayImagesForSimpleSearch = (dataSource) => {
  let resultArray = [];
  Object.entries(dataSource).map((item) => {
    resultArray.push({
      url: item[1],
      key: item[0],
    });
  });

  return resultArray;
};

export const toPascalCase = (str) =>
  str.replace(
    /\w\S*/g,
    (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
  );

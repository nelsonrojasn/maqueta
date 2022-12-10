import { normalizeObjectAsArrayForSimpleSearch, normalizeArrayImagesForSimpleSearch } from "../UtilsHelper";

export const fetchAllBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } 
  const {message} = await response.json();
  return normalizeObjectAsArrayForSimpleSearch(message);
};

export const fetchImageListBySelectedFilter = async (selectedBreed) => {

  const response = await fetch(
    `https://dog.ceo/api/breed/${selectedBreed}/images`
  );
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } 
  const {message} = await response.json();
  return normalizeArrayImagesForSimpleSearch(message);

};

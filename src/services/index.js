export const fetchAllBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  if (!response.ok) {
    throw new Error('Data coud not be fetched!')
  } else {
    return response.json()
  }
}

export const fetchImageListBySelectedFilter = async (selectedBreed) => {
  const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
  if (!response.ok) {
    throw new Error('Data coud not be fetched!')
  } else {
    return response.json()
  }
}


//export const getImagesFromBreed = (breed) => fetch(`https://dog.ceo/api/breed/{breed}/images`)
import { useState, useEffect } from "react";
import { fetchAllBreeds } from "../services/FetchData";

export const useAllBreeds = () =>
{
    const [breedsArray, setBreedsArray] = useState([]);

    function handleBreedsChange(newData) {
        setBreedsArray(newData);
    }
    async function getAllBreedsArray() {
        const arrayResult = await fetchAllBreeds();
        handleBreedsChange(arrayResult);
    }

    useEffect(()=>{
        getAllBreedsArray()
    },[]);


    return breedsArray;
}
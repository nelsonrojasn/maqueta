import { useState, useEffect } from "react";
import { fetchAllBreeds } from "../services/FetchData";

export const useAllRazas = () =>
{
    const [razas, setRazas] = useState([]);

    function handleRazasChange(newData) {
        setRazas(newData);
    }
    async function getAllRazas() {
        const arrayResult = await fetchAllBreeds();
        handleRazasChange(arrayResult);
    }

    useEffect(()=>{
        getAllRazas()
    },[]);

    return razas;
}
import React, { useState, useEffect } from "react";
import Selector from "../Selector";
import SearchButton from "../SearchButton";
import { fetchAllBreeds } from "../../services";
import InfoFiltros from "../InfoFiltros";

function Search({ handleImageListUpdated }) {
  const [razas, setRazas] = useState([]);
  const [subRazas, setSubRazas] = useState([]);
  const [selectedRaza, setSelectedRaza] = useState("");
  const [selectedSubRaza, setSelectedSubRaza] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  function normalizeItemsForSimpleSearch(items) {
    if (items.length === 0) {
      return [];
    }

    let arrayItems = [];
    items.map((item) => {
      arrayItems.push({ nombre: item });
    });
    return arrayItems;
  }

  function normalizeObjectAsArrayForSimpleSearch(dataSource) {
    let resultArray = [];

    Object.entries(dataSource).map((item) =>
      resultArray.push({
        nombre: item[0],
        items: normalizeItemsForSimpleSearch(item[1]),
      })
    );
    return resultArray;
  }

  useEffect(() => {
    fetchAllBreeds()
      .then((res) => {
        //console.log(res);
        let arrayResult = normalizeObjectAsArrayForSimpleSearch(res.message);

        //console.log("~~~~", arrayResult);
        setRazas(arrayResult);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  function handleChangeRaza(event) {
    let currentValue = event.target.value;
    setSelectedRaza(currentValue);
    setSelectedSubRaza("");
    //console.log("=====", currentValue, razas);
    let subRazas = razas.filter((item) => {
      return item.nombre === currentValue;
    });

    //console.log("~~~~", subRazas);

    setSubRazas(subRazas[0].items);

    setSelectedFilter(currentValue);
  }

  function handleChangeSubRaza(event) {
    let currentValue = event.target.value;
    setSelectedSubRaza(currentValue);

    let selectedFilter =
      selectedRaza + (currentValue.length > 0 ? "/" + currentValue : "");
    setSelectedFilter(selectedFilter);
  }

  return (
    <div className="card">
      <div className="card-body">
        <label>Seleccione Raza</label>
        <Selector dataSource={razas} handleChange={handleChangeRaza} />
        <label>Seleccione Sub Raza</label>
        <Selector dataSource={subRazas} handleChange={handleChangeSubRaza} />

        <InfoFiltros
          selectedRaza={selectedRaza}
          selectedSubRaza={selectedSubRaza}
          selectedFilter={selectedFilter}
        />

        <SearchButton
          handleImageListUpdated={handleImageListUpdated}
          selectedFilter={selectedFilter}
        />
      </div>
    </div>
  );
}

export default Search;

import React, { useState, useEffect } from "react";

import Selector from "../Selector";
import SearchButton from "../SearchButton";
import InfoFiltros from "../InfoFiltros";
import {useAllRazas} from "../../hooks/useAllRazas";

function Search() {
  const razas = useAllRazas();
  const [subRazas, setSubRazas] = useState([]);
  const [selectedRaza, setSelectedRaza] = useState("");
  const [selectedSubRaza, setSelectedSubRaza] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  
  useEffect(() => {
    //actualizar filtro seleccionado
    const selectedFilter =
      selectedRaza + (selectedSubRaza.length > 0 ? "/" + selectedSubRaza : "");
    setSelectedFilter(selectedFilter);
    
  }, [selectedRaza, selectedSubRaza]);

  useEffect(() => {
    //actualizar lista de subrazas
    setSelectedSubRaza("");
    setSubRazas([]);

    const subRazas = razas.filter((item) => {
      return item.nombre === selectedRaza;
    });
    subRazas.length > 0 && setSubRazas(subRazas[0].items);

  }, [selectedRaza, razas]);

  return (
    <div className="card">
      <div className="card-body">
        <Selector
          labelText="Seleccione Raza"
          dataSource={razas}
          handleChange={(event) => setSelectedRaza(event.target.value)}
        />

        <Selector
          labelText="Seleccione Sub Raza"
          dataSource={subRazas}
          handleChange={(event) => setSelectedSubRaza(event.target.value)}
        />

        <InfoFiltros
          selectedRaza={selectedRaza}
          selectedSubRaza={selectedSubRaza}
          selectedFilter={selectedFilter}
        />

        <SearchButton selectedFilter={selectedFilter} />
      </div>
    </div>
  );
}

export default Search;

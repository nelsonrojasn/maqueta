import React from "react";

function InfoFiltros({ selectedRaza, selectedSubRaza, selectedFilter }) {
  return (
    <div className="card mb-2">
      <div className="card-header">Filtros actuales</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Raza: {selectedRaza}</li>
        <li className="list-group-item">Sub Raza: {selectedSubRaza}</li>
        <li className="list-group-item">Seleccion actual: {selectedFilter}</li>
      </ul>
    </div>
  );
}
export default InfoFiltros;

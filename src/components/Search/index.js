import React from "react";

function Search() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <label>Seleccione Raza</label>
          <select
            className="form-select mb-2"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label>Seleccione Sub-raza</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <label>Otras opciones de búsqueda</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Con visualizaciones recientes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" for="flexCheckChecked">
              Con comentarios
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

import React, { useState } from "react";

function Selector({ dataSource, handleChange }) {
  const toPascalCase = (str) =>
    str.replace(
      /\w\S*/g,
      (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
    );


  return (
    <select
      className="form-select mb-2"
      aria-label="Default select example"
      defaultValue={""}
      onChange={(event) => handleChange(event)}
    >
      <option value="">Seleccionar</option>
      {dataSource &&
        dataSource.map((item) => (
          <option key={item.nombre} value={item.nombre}>
            {toPascalCase(item.nombre)}
          </option>
        ))}
    </select>
  );
}

export default Selector;

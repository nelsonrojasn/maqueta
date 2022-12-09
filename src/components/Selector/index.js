import React from "react";

import { toPascalCase } from "../../services/UtilsHelper";

function Selector({ dataSource, handleChange }) {
  return (
    <select
      className="form-select mb-2"
      aria-label="Default select example"
      role="dropdown"
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

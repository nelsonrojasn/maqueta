import React from "react";

import { toPascalCase } from "../../services/UtilsHelper";

export default function BreedSelector({ labelText, dataSource, handleChange, value }) {
  return (
    <>
    <label>{labelText}</label>
    <select
      className="form-select mb-2"
      aria-label={labelText}
      role="dropdown"
      value={value}
      onChange={(event) => handleChange(event)}
    >
      <option value="">Select</option>
      {dataSource &&
        dataSource.map((item) => (
          <option key={item.name} value={item.name}>
            {toPascalCase(item.name)}
          </option>
        ))}
    </select>
    </>
  );
}
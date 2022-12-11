import { toPascalCase } from "../../services/UtilsHelper";

function Selector({ labelText, dataSource, handleChange }) {
  return (
    <>
    <label>{labelText}</label>
    <select
      className="form-select mb-2"
      aria-label={labelText}
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
    </>
  );
}

export default Selector;

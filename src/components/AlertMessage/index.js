import React from "react";

function AlertMessage({ dataSource, isLoading }) {
  return (
    !isLoading &&
    dataSource.length === 0 && (
      <span className="badge bg-success text-wrap d-block p-2">
        Nada que mostrar aún. Vamos, anímate a buscar
      </span>
    )
  );
}
export default AlertMessage;

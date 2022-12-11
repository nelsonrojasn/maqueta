import React from "react";

function LoadingMessage({ isLoading }) {
  return (
    isLoading && (
      <span className="badge bg-info text-wrap d-block p-2">
        Cargando lista de imágenes...
      </span>
    )
  );
}

export default LoadingMessage;

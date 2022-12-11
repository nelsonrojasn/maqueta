function LoadingMessage({ isLoading }) {
  return (
    isLoading && (
      <span className="badge bg-info text-wrap">
        Cargando lista de imágenes...
      </span>
    )
  );
}

export default LoadingMessage;

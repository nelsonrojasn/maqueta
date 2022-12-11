function AlertMessage({ dataSource, isLoading }) {
  return (
    !isLoading &&
    dataSource.length === 0 && (
      <span className="alert alert-success">
        Nada que mostrar aún. Vamos, anímate a buscar
      </span>
    )
  );
}
export default AlertMessage;

function AlertMessage({ dataSource, isLoading }) {
  if (!isLoading && dataSource.length === 0) {
    return (
      <span className="alert alert-success">
        Nada que mostrar aún. Vamos, anímate a buscar
      </span>
    );
  }
}
export default AlertMessage;

import Card from "../Card";

function ListImages({ dataSource }) {
  return (
    dataSource &&
    dataSource.length > 0 && (
      <>
        <span className="badge bg-primary text-wrap d-block p-2">
          Mostrando {dataSource.length} resultados
        </span>
        <div className="row" role="gallery">
          {dataSource.map((item) => (
            <Card key={"card-" + item.key} imageLink={item.url} />
          ))}
        </div>
      </>
    )
  );
}
export default ListImages;

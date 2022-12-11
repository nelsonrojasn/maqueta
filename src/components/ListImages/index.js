import Card from "../Card";

function ListImages({ dataSource }) {
  if (dataSource && dataSource.length > 0) {
    return (
      <>
        <span className="badge bg-primary text-wrap">
          Mostrando {dataSource.length} resultados
        </span>
        <div className="row" role="gallery">
          {dataSource.map((item) => (
            <Card key={"card-" + item.key} imageLink={item.url} />
          ))}
        </div>
      </>
    );
  }
}
export default ListImages;

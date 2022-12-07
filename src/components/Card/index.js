import React from "react";

function Card(props) {
  const imageUrl =
    "https://images.dog.ceo/breeds/poodle-standard/n02113799_5704.jpg";
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Visualizaciones</li>
        <li className="list-group-item">Comentarios</li>
      </ul>
    </div>
  );
}

export default Card;

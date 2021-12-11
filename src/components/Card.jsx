import { Link } from "react-router-dom";

export default function Card({ id, image, title, price }) {
  return (
    <div className="Card">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} className="card-img" />
      </Link>
      <p>{title}</p>
      <p>{price} €</p>
      <button className="btn">AÑADIR</button>
    </div>
  );
}

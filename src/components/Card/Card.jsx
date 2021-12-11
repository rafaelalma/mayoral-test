import "./Card.css";

export default function Card({ image, title, price }) {
  return (
    <div className="Card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price} €</p>
      <button>AÑADIR</button>
    </div>
  );
}

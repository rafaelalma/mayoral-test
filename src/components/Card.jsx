export default function Card({ image, title, price }) {
  return (
    <div className="Card">
      <img src={image} alt={title} className="card-img" />
      <p>{title}</p>
      <p>{price} €</p>
      <button className="btn">AÑADIR</button>
    </div>
  );
}

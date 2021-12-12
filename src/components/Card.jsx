import { formatNumber } from "../utils/format.js";

export default function Card({ image, title, price, discount, hasMoreColors }) {
  return (
    <div className="Card">
      <img src={image} alt={title} className="card-img" />
      <p>{title}</p>

      {discount ? (
        <div>
          <p>
            <del>{price} €</del>
          </p>
          <p>
            {formatNumber(price - price * discount)} € (-{discount * 100}%)
          </p>
        </div>
      ) : (
        <p>{price} €</p>
      )}

      {hasMoreColors ? <p>más colores</p> : null}

      <button className="btn">AÑADIR</button>
    </div>
  );
}

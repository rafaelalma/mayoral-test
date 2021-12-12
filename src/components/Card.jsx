import { formatNumber } from "../utils/format.js";

export default function Card({ image, title, price, discount, hasMoreColors }) {
  return (
    <div className="Card">
      <div>
        <img src={image} alt={title} className="card-img" />
        <p>{title}</p>
        {discount ? (
          <div>
            <p>
              <del>{price} €</del>
            </p>
            <p className="discount">
              {formatNumber(price - price * discount)} € (-{discount * 100}%)
            </p>
          </div>
        ) : (
          <p>{price} €</p>
        )}
      </div>

      <div>
        {hasMoreColors ? (
          <p className="colors">
            <span className="plus">+</span> Más colores
          </p>
        ) : null}
        <button className="card-btn">AÑADIR</button>
      </div>
    </div>
  );
}

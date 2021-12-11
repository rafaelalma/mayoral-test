import { useParams } from "react-router";
import { getShirt } from "../data/shirts";

export default function Detail() {
  const params = useParams();
  const id = Number.parseInt(params.id, 10);
  const detail = getShirt(id);

  return (
    <div className="Detail">
      <img src={detail.image} alt={detail.title} />
      <p>{detail.title}</p>
      <p>{detail.price} €</p>
      <button className="btn">AÑADIR</button>
    </div>
  );
}

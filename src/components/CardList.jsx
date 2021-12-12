import Card from "./Card";

export default function CardList({ cards }) {
  return (
    <ul className="CardList">
      {cards.map((card) => {
        return (
          <li key={card.id}>
            <Card
              image={card.image}
              title={card.title}
              price={card.price}
              discount={card.discount}
              hasMoreColors={card.hasMoreColors}
            />
          </li>
        );
      })}
    </ul>
  );
}

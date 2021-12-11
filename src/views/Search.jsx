import { useSearchParams } from "react-router-dom";
import { getShirts } from "../data/shirts.js";
import CardList from "../components/CardList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const handleQueryChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const queryResults = getShirts().filter((shirt) => {
    if (!query) {
      return true;
    }

    const title = shirt.title.toLowerCase();
    return title.includes(query.toLowerCase().trim());
  });

  return (
    <>
      <div className="Search">
        <label htmlFor="search-input" className="search-label">
          <input
            value={query}
            onChange={handleQueryChange}
            type="text"
            id="search-input"
            className="search-input"
            placeholder="Buscar"
          />
        </label>
      </div>
      <CardList cards={queryResults} />
    </>
  );
}

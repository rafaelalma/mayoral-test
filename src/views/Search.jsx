import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("data.json", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();

      const queryResults = data.filter((element) => {
        const query = searchParams.get("query") || "";

        if (!query) {
          return true;
        }

        const title = element.title.toLowerCase();
        return title.includes(query.toLowerCase().trim());
      });

      setResults(queryResults);
    })();
  }, [searchParams]);

  const handleQueryChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <div className="Search">
        <label htmlFor="search-input" className="search-label">
          <input
            value={searchParams.get("query") || ""}
            onChange={handleQueryChange}
            type="text"
            id="search-input"
            className="search-input"
            placeholder="Buscar"
          />
        </label>
      </div>
      <CardList cards={results} />
    </>
  );
}

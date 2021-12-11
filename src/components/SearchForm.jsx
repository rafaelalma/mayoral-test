export default function SearchForm() {
  return (
    <form className="SearchForm">
      <label htmlFor="search-input" className="search-label">
        <input type="text" id="search-input" className="search-input" />
      </label>
      <button type="submit" className="btn">
        Buscar
      </button>
    </form>
  );
}

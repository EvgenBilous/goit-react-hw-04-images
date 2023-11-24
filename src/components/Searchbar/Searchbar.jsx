const SearchBar = ({ getQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.inputSearch.value.trim().toLowerCase();
    if (!query) return;
    getQuery(query);
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          name="inputSearch"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;

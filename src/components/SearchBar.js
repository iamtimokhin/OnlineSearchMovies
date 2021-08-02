const SearchBar = ({ setSearchValue, searchValue }) => {
  return (
    <>
      <section className={"search section--search"}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={"search__input"}
          placeholder="Enter something..."
        />
      </section>
    </>
  );
};

export default SearchBar;

function Search() {
  /*
        in this component we can seperate search logic from the main component so its handled by this component
    */
  return (
    <>
      <input className="search-bar" type="search" />
      <div className="buttons">
        <button>Google Search</button>
        <button>Feeling Lucky</button>
      </div>
    </>
  );
}
export default Search;

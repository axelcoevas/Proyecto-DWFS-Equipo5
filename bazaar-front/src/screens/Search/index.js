import { useLocation } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";

// Custom query hook.
const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Search = () => {
  const query = useQuery();
  const [results, setResults] = useState([]);

  useEffect(() => {
    // TODO: query products from db
    console.log("querying...");
    return () => {};
  }, [query]);

  const renderProducts = () => {
    if (results.length > 0)
      return results.map((product) => <p>{product.name}</p>);
    else return <p>No results found</p>;
  };

  return (
    <div>
      <h1>Search results for "{query.get("q")}"</h1>
      {renderProducts()}
    </div>
  );
};

export default Search;

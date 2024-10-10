import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const { food_list } = useContext(StoreContext);
  const filteredFoods = food_list.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <h2>Search for Food</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-results">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <div key={item._id}>
              <p>
                {item.name} - ${item.price}
              </p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

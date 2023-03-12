import React, { useState } from 'react';

function loadRecipe(searchInput, setMeal) {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput)
    .then((response) => response.json())
    .then((data) => setMeal(data.meals ? data.meals : []))
    .catch((error) => console.log(error));
}

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [meal, setMeal] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput) {
      loadRecipe(searchInput, setMeal);
    }
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={handleSearch}>Search</button>
      {meal.map((m) => (
        <div key={m.idMeal}>
          <h>{m.strMeal}</h>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
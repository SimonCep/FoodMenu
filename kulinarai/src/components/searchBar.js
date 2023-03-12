import React, { useState } from 'react';

function loadRecipe(searchInput, setMeal) {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput)
    .then((response) => response.json())
    .then((data) => setMeal(data.meals ? data.meals[0].strMeal : "Meal not found"));
}

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [meal, setMeal] = useState("");

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
      {meal && <div><h>{meal}</h></div>}
    </div>
  );
};

export default SearchBar;

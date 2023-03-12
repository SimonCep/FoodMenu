import React, { useState, useEffect } from 'react'


const SearchBar = () => {
  // Function to load the recepies from the API
  function loadRecepie() {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+searchInput)
        .then((response) => response.json())
        .then((data) => console.log(data.meals));
  }

  //const [recepie, setRecepie] = useState([]);
  // useState for search Input
  const [searchInput, setSearchInput] = useState("");

  // a const for handeling the changes in the search bar
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  // return statement that provides what to show on the screen
  return (
    <div>

      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />

      <button onClick={useEffect(() => {loadRecepie()})}>Search</button>
        <div>
          <h>{searchInput}</h>
        </div>
      </div>
  )

};

export default SearchBar;
import React, { useState } from 'react';
import { Card, Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './styles.css';

function loadRecipe(searchInput, setMeal) {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput)
    .then((response) => response.json())
    .then((data) => setMeal(data.meals ? data.meals : [{"idMeal": '1', "strMeal": "Meal not found"}]))      
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
    <Container className="my-3" style={{ maxWidth: '500px' }}>
      <div className="d-flex">
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
          className="form-control me-2 search-bar"
        />
        <button className="btn btn-primary button-bar" onClick={handleSearch}>
          Search
        </button>
      </div>
      {meal.map((m) => (
  <div key={m.idMeal}>
    {m.idMeal == 1 ? (
      <Card className="my-3 p-3 d-flex flex-column">
        <Card.Img variant="top" src="https://i.imgflip.com/rndxz.jpg" alt="meal not found" />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{m.strMeal}</Card.Title>
          <Card.Text className="card-text"><strong>No results match your search criteria</strong> {m.strCategory}</Card.Text>          
        </Card.Body>
      </Card>
    ) : (
      <Card className="my-3 p-3 d-flex flex-column">
        <Card.Img variant="top" src={m.strMealThumb} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{m.strMeal}</Card.Title>
          <Card.Text className="card-text"><strong>Category:</strong> {m.strCategory}</Card.Text>
          <Card.Text><strong>Area:</strong> {m.strArea}</Card.Text>
          { /* The link to the individual recipe page */}
          <Card.Link className="card-text" href={'/Recipe/' + m.idMeal}>More information</Card.Link>
        </Card.Body>
      </Card>
    )}
  </div>
))}
    </Container>
  );
};

export default SearchBar;
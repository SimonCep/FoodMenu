import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card, Container } from 'react-bootstrap';

function RecipePage() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals ? data.meals : [{ "idMeal": '1', "strMeal": "Meal not found" }]))
      .catch((error) => console.log(error));
  }, [id])

  if (!meal.length) {
    return <div>Loading...</div>
  }

  const { strMeal, strMealThumb, strInstructions, strCategory, strArea } = meal[0];

  return (
    <Container className="my-3" style={{ height: '100vh' }}>
      <Card className="my-3 p-3 d-flex flex-column">
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{strMeal}</Card.Title>
          <Card.Text className="card-text"><strong>Category:</strong> {strCategory}</Card.Text>
          <Card.Text><strong>Area:</strong> {strArea}</Card.Text>
          <Card.Text><strong>Instructions:</strong> {strInstructions}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RecipePage;

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card, Container } from 'react-bootstrap';
import "./recipePage.css"
import { auto } from "@popperjs/core";

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
  const YTube = meal[0].strYoutube.replace("watch?v=", "embed/");
  const { strMeal, strMealThumb, strInstructions, strCategory, strArea, strYoutube } = meal[0];

  return (
    <div className="recipe" style={{ height: auto }}>
      <Card className="my-3 p-3 recipe-card">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{strMeal}</Card.Title>
          <Card.Text className="card-text"><strong>Category:</strong> {strCategory}</Card.Text>
          <Card.Text><strong>Area:</strong> {strArea}</Card.Text>
          <Card.Text><strong>Instructions:</strong> {strInstructions}</Card.Text>
          <div className="video-responsive">
            <Card.Text style={{ fontSize: 30 }}><strong>Youtube video</strong></Card.Text>
            <iframe
              width="853"
              height="480"
              src={YTube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipePage;

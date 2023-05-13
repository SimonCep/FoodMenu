import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FlagIcon } from 'react-flag-kit';
import "./Filter.css";

const countries = [
    { name: "Canada", flag: <FlagIcon code="CA" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Canadian" },
    { name: "United States", flag: <FlagIcon code="US" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "American" },
    { name: "United Kingdom", flag: <FlagIcon code="GB" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "British" },
    { name: "China", flag: <FlagIcon code="CN" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Chinese" },
    { name: "Croatia", flag: <FlagIcon code="HR" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Croatian" },
    { name: "The Netherlands", flag: <FlagIcon code="NL" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Dutch" },
    { name: "Mexico", flag: <FlagIcon code="MX" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Mexican" },
    { name: "Japan", flag: <FlagIcon code="JP" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Japanese" },
    { name: "Egypt", flag: <FlagIcon code="EG" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Egyptian" },
    { name: "France", flag: <FlagIcon code="FR" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "French" },
    { name: "Greece", flag: <FlagIcon code="GR" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Greek" },
    { name: "India", flag: <FlagIcon code="IN" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Indian" },
    { name: "Ireland", flag: <FlagIcon code="IE" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Irish" },
    { name: "Italy", flag: <FlagIcon code="IT" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Italian" },
    { name: "Jamaica", flag: <FlagIcon code="JM" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Jamaican" },
    { name: "Japan", flag: <FlagIcon code="JP" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Japanese" },
    { name: "Kenya", flag: <FlagIcon code="KE" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Kenyan" },
    { name: "Malaysia", flag: <FlagIcon code="MY" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Malaysian" },
    { name: "Mexico", flag: <FlagIcon code="MX" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Mexican" },
    { name: "Morocco", flag: <FlagIcon code="MA" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Moroccan" },
    { name: "Poland", flag: <FlagIcon code="PL" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Polish" },
    { name: "Portugal", flag: <FlagIcon code="PT" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Portuguese" },
    { name: "Russia", flag: <FlagIcon code="RU" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Russian" },
    { name: "Spain", flag: <FlagIcon code="ES" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Spanish" },
    { name: "Thailand", flag: <FlagIcon code="TH" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Thai" },
    { name: "Tunisia", flag: <FlagIcon code="TN" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Tunisian" },
    { name: "Turkey", flag: <FlagIcon code="TR" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Turkish" },
    { name: "Vietnam", flag: <FlagIcon code="VN" size={100} style={{ width: '150px', height: '100px' }} />, apiParam: "Vietnamese" }

];

const categories = [
    { name: "Beef", apiParam: "Beef", img: "https://www.themealdb.com/images/category/beef.png" },
    { name: "Chicken", apiParam: "Chicken", img: "https://www.themealdb.com/images/category/chicken.png" },
    { name: "Dessert", apiParam: "Dessert", img: "https://www.themealdb.com/images/category/dessert.png" },
    { name: "Lamb", apiParam: "Lamb", img: "https://www.themealdb.com/images/category/lamb.png" },
    { name: "Pasta", apiParam: "Pasta", img: "https://www.themealdb.com/images/category/pasta.png" },
    { name: "Pork", apiParam: "Pork", img: "https://www.themealdb.com/images/category/pork.png" },
    { name: "Seafood", apiParam: "Seafood", img: "https://www.themealdb.com/images/category/seafood.png" },
    { name: "Side", apiParam: "Side", img: "https://www.themealdb.com/images/category/side.png" },
    { name: "Starter", apiParam: "Starter", img: "https://www.themealdb.com/images/category/starter.png" },
    { name: "Vegan", apiParam: "Vegan", img: "https://www.themealdb.com/images/category/vegan.png" },
    { name: "Vegetarian", apiParam: "Vegetarian", img: "https://www.themealdb.com/images/category/vegetarian.png" }
];


const Filter = () => {
    const [meals, setMeals] = useState([]);
    const [showMeals, setShowMeals] = useState(false);

    const handleCategoryClick = (country, category) => {
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
        if (category) {
            url += `c=${category}`;
        }
        if (country) {
            url += `a=${country}`
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.meals);
                setShowMeals(true);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container className="my-3" >
            {!showMeals && (
                <>
                    <div className="Filter">
                        <h2>Browse by Countries</h2>
                    </div>
                    <Row>
                        {countries.map((country) => (
                            <Col xs={6} md={4} lg={3} key={country.name}>
                                <div className="my-3 p-3 flag-container" onClick={() => handleCategoryClick(country.apiParam, null)}>
                                    {country.flag}
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="Filter">
                        <h2>Browse by Categories</h2>
                    </div>
                    <Row>
                        {categories.map((category) => (
                            <Col key={category.name} xs={6} md={4} lg={3}>
                                <Card className="my-3 p-3 category-container" onClick={() => handleCategoryClick(null, category.apiParam)}>
                                    <Card.Img variant="top" src={category.img} />
                                    <Card.Body>
                                        <Card.Title>{category.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}

            {showMeals && (
                <Row>
                    {meals.map((meal) => (
                        <Col xs={6} md={4} lg={3} key={meal.idMeal}>
                            <a className="card-link" href={'/Recipe/' + meal.idMeal}>
                                <Card className="my-3 p-3">
                                    <Card.Img variant="top" src={meal.strMealThumb} />
                                    <Card.Body>
                                        <Card.Title>{meal.strMeal}</Card.Title>
                                        <Card.Text>{meal.strCategory}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};


export default Filter;

import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";

function RecipePage() {
    const {id} = useParams();
    const [meal, setMeal] = useState([]);
    
    {/* Fetches the needed meal */}
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
            .then((response) => response.json())
            .then((data) => setMeal(data.meals ? data.meals : [{"idMeal": '1', "strMeal": "Meal not found"}]))      
            .catch((error) => console.log(error));
    })
    
    return (
        
        <div>
        {/*  The basic line to see if the page works properly */}
            <h1>Hello, World! {id} </h1>
        </div>

    );
}

export default RecipePage;
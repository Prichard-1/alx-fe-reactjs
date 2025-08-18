import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import recipeData from './data.json'; // Ensure this file is inside src/
import AddRecipeForm from './components/AddRecipeForm';


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
	  <Route path="/add" element={<AddRecipeForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;


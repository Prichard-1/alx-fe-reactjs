// src/App.jsx
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import recipeData from './data.json'; // Make sure data.json is inside src/

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div>
      <HomePage recipes={recipes} />
    </div>
  );
}

export default App;


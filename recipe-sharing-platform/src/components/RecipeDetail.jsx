import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-700">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2 text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;


import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim() || ingredients.split('\n').length < 2)
      newErrors.ingredients = 'Please list at least two ingredients';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit logic here (e.g., console.log or update state)
    console.log({ title, ingredients, steps });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Add a New Recipe</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Ingredients (one per line)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>🍽️ Recipe Sharing App</h1> {/* This is your homepage title */}
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

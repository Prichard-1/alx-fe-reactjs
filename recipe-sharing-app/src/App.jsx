// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeFormWrapper from './components/EditRecipeFormWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeFormWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


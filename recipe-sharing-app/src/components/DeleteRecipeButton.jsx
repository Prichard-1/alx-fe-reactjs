import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!recipeId) {
      console.warn("No recipe ID provided to DeleteRecipeButton.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '1rem' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

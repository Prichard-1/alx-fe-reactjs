
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';

const EditRecipeFormWrapper = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(id))
  );

  return recipe ? (
    <EditRecipeForm recipe={recipe} />
  ) : (
    <p>Recipe not found.</p>
  );
};

export default EditRecipeFormWrapper;


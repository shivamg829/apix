import { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const RecipeApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchRecipe = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError('');
    setRecipe(null);

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      
      if (response.data.meals) {
        setRecipe(response.data.meals[0]);
      } else {
        setError('No recipes found. Try another search term.');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getIngredientsList = () => {
    if (!recipe) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>🥘 Recipe Finder</h1>
        <p>Search for delicious recipes from around the world</p>
      </div>

      <div className="app-content">
        <div className="app-card search-card">
          <form onSubmit={searchRecipe} className="search-form">
            <div className="form-group">
              <label>Recipe Name</label>
              <input
                type="text"
                placeholder="Enter recipe name (e.g., Chicken)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search Recipe
            </button>
          </form>
        </div>

        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {recipe && !loading && !error && (
          <div className="app-card recipe-detail-card">
            <img 
              src={recipe.strMealThumb} 
              alt={recipe.strMeal}
              className="recipe-detail-image"
            />
            <div className="recipe-detail-content">
              <h2 className="recipe-detail-title">{recipe.strMeal}</h2>
              <div className="recipe-detail-meta">
                <span className="recipe-tag">{recipe.strCategory}</span>
                <span className="recipe-tag">{recipe.strArea}</span>
              </div>

              <h3 className="recipe-section-title">Ingredients</h3>
              <ul className="ingredients-list">
                {getIngredientsList().map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              <h3 className="recipe-section-title">Instructions</h3>
              <p className="recipe-instructions">{recipe.strInstructions}</p>

              {recipe.strYoutube && (
                <a 
                  href={recipe.strYoutube} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '1.5rem' }}
                >
                  📺 Watch on YouTube
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeApp;

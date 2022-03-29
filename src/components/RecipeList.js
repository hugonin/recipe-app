import { Link } from "react-router-dom";

export default function RecipeList({ recipes }) {

  if (recipes.length === 0) {
    return <div className="alert alert-error mt-2">No recipes to load</div>

  }

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 p-8">
        {recipes.map((recipe) => (
          <div className="card container mx-auto w-96 bg-primary text-primary-content ">
            <div className="card-body ">
              <h2 className="card-title">{recipe.title}</h2>
              <p>{recipe.cookingTime} to make.</p>
              <p>{recipe.method.substring(0, 100)}...</p>
              <div className="card-actions justify-end">
                <button className="btn">
                  <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

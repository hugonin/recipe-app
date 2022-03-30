import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="alert alert-error mt-2">No recipes to load</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 p-8">
      {recipes.map((recipe) => (
        <div className={`card container mx-auto w-96 ${mode} bg-primary`}>
          <div key={recipe.id} className={`card-body `}>
            <h2 className={`card-title ${mode} text-accent`}>{recipe.title}</h2>
            <p>{recipe.cookingTime} to make.</p>
            <p>{recipe.method.substring(0, 100)}...</p>
            <div className="card-actions justify-end">
              <button className={`btn ${mode} bg-base `}>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className={`text ${mode} text-accent`}
                >
                  Cook This
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

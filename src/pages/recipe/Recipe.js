import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe({ recipes }) {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <>
          <div class="card container mx-auto w-96 mt-12 bg-primary text-primary-content">
            <div class="card-body items-center text-center">
              <h2 class="card-title text-black">{recipe.title}</h2>
              <p> Takes {recipe.cookingTime} to cook.</p>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <p>{recipe.method}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

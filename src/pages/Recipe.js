import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTheme } from "../hooks/useTheme";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const { mode } = useTheme();
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <>
          <div
            class={`card container mx-auto w-96 mt-12 mb-12 ${mode}  bg-primary `}
          >
            <div class="card-body items-center text-center">
              <h2 class={`card-title ${mode} text-accent`}>{recipe.title}</h2>
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

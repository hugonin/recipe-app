import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import RecipeList from "../components/RecipeList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = " http://localhost:3000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="text-2xl text-center mt-4">Recipes including "{query}"</h2>
      {error && <p className="alert alert-error shadow-lg">{error}</p>}
      {isPending && (
        <p className="progress w-56" value="40" max="100">
          Loading...
        </p>
      )}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

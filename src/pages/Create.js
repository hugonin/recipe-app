import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import { useTheme } from "../hooks/useTheme.js";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();
  const { mode } = useTheme();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  // redirect the user when we get data response
  useEffect(() => {
    if (data) {
      navigate("/ ");
    } else if (error) {
      console.log(error);
    }
  }, [data, navigate, error]);

  return (
    <div className="container mx-auto px-4">
      <h2 className={`text-2xl text-center mt-4 ${mode} text-accent`}>
        Add a new recipe
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="block">
          <span>Recipe title:</span>
          <div>
            <input
              type="text"
              placeholder="Type here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
              className={`input w-full mt-1 mb-2 max-w-xs input-primary ${mode} bg-primary`}
            />
          </div>
        </label>

        <label className="block">
          <span>Recipe ingredients: </span>
          <div>
            <input
              type="text"
              className={`input w-full mt-1 mb-2 max-w-xs input-primary ${mode} bg-primary`}
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button
              onClick={handleAdd}
              className={`btn m-2 ${mode} btn-secondary`}
            >
              add
            </button>
          </div>
        </label>
        <p>
          {" "}
          Current ingredients:{" "}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>

        <label className="block">
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            className={`textarea mt-2 mb-1 block w-full textarea-primary ${mode} bg-primary`}
            value={method}
            required
          />
        </label>

        <label className="block">
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            className={`input mt-1 mb-2 w-full max-w-xs ${mode} bg-primary `}
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className={`btn ${mode} btn-secondary`}>Submit</button>
      </form>
    </div>
  );
}

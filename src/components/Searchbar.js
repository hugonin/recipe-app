import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearch = () => setSearch(!search);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0  left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
              onClick={handleSearch}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
            onChange={(e) => setTerm(e.target.value)}

          />
        </div>
      </form>
    </div>
  );
}

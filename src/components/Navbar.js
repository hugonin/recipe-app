import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  const { mode } =  useTheme()

  return (
    <div className={`navbar ${mode} bg-primary`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className={`btn ${mode} bg-base btn-ghost btn-circle`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${mode} bg-base rounded-box w-52`}
          >
            <li>
              <Link to="/" className={`text ${mode} text-accent`}>Home</Link>
            </li>
            <li>
              <Link to="/create" className={`text ${mode} text-accent`}>Create Recipe</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className={`btn ${mode} text-accent btn-ghost normal-case text-xl`}>
          Cooking Master
        </Link>
      </div>

      <div className="navbar-end">
       <Searchbar />
       <ThemeSelector   />
      </div>
    </div>
  );
}

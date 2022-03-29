import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

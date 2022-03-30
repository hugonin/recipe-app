import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import Footer from "./components/Footer";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`flex flex-col justify-between min-h-full ${mode} bg-base`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

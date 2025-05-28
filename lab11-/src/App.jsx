import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SeriePage from "./pages/SeriePage";
import SerieFormPage from "./pages/SerieFormPage";
import CategoryFormPage from "./pages/CategoryFormPage";

function App() {
  const [series, setSeries] = useState(() => {
    const stored = localStorage.getItem("series");
    return stored ? JSON.parse(stored) : [
      { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
      { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
      { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang.png" },
      { cod: 4, nom: "Stranger Things", cat: "Horror", img: "stranger-things.png" },
      { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
      { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" },
    ];
  });

  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : [
      { cod: 1, nom: "Horror" },
      { cod: 2, nom: "Comedy" },
      { cod: 3, nom: "Action" },
      { cod: 4, nom: "Drama" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(series));
  }, [series]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/categories"
          element={<CategoryPage categories={categories} setCategories={setCategories} />}
        />
        <Route
          path="/categories/edit/:id"
          element={<CategoryFormPage categories={categories} setCategories={setCategories} />}
        />
        <Route
          path="/series"
          element={<SeriePage series={series} setSeries={setSeries} />}
        />
        <Route
          path="/series/edit/:id"
          element={<SerieFormPage series={series} setSeries={setSeries} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

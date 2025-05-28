import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SeriePage from "./pages/SeriePage";
import SerieFormPage from "./pages/SerieFormPage";
import CategoryPage from "./pages/CategoryPage";
import CategoryFormPage from "./pages/CategoryFormPage";

function App() {
  const [series, setSeries] = useState(() => {
    const stored = localStorage.getItem("series");
    return stored ? JSON.parse(stored) : [];
  });

  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : [];
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
        <Route
          path="/series"
          element={<SeriePage series={series} setSeries={setSeries} />}
        />
        <Route
          path="/series/edit/:id"
          element={
            <SerieFormPage
              series={series}
              setSeries={setSeries}
              categories={categories} // ⬅️ PASAMOS CATEGORÍAS AQUÍ
            />
          }
        />
        <Route
          path="/categories"
          element={<CategoryPage categories={categories} setCategories={setCategories} />}
        />
        <Route
          path="/categories/edit/:id"
          element={<CategoryFormPage categories={categories} setCategories={setCategories} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

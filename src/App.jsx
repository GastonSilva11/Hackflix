import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d7e867d9da9531a3b16dd16a7ad7e1f6/search?query=${searchTerm}`
      );
      const data = await response.json();
      setSearchResult(data.results);
    } catch (error) {
      console.error("Error al buscar peliculas : ", error);
    }
  };

  return <RouterProvider router={router} />;
}

export default App;

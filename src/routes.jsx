import { createBrowserRouter } from "react-router-dom";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import Paginador from "./components/Paginador";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "paginacion",
        element: <Paginador />,
      },
      {
        path: "pelicula/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

export default router;

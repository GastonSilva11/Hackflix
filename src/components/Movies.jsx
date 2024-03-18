import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import movies from "../data/movieList";
import ShowModal from "./ShowModal";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Movies = ({ rating, pagina }) => {
  const [movies, setMovies] = useState([]);
  const contextOutlet = useOutletContext();

  useEffect(() => {
    const getFetchMovie = async () => {
      try {
        let url = contextOutlet.movieTitle //aca decimos, si el context movieTitle existe (vendria a ser el search del navbar) a la url le pasamos lo que esta buscando, sino le pasamos el total de las peliculas (que es el discover)
          ? "https://api.themoviedb.org/3/search/movie"
          : "https://api.themoviedb.org/3/discover/movie";

        const axiosConfig = {
          method: "GET",
          url: url,
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            query: contextOutlet.movieTitle, //aca le pasamos lo que es MovieTitle, que viene del input del navbar (recibido aqui desde Outlet mediante el context)
            page: pagina,
          },
        };

        const response = await axios(axiosConfig);

        setMovies(response.data.results); //los datos que me devuelva los guardo en movies, y esto va a Movie para que lo muestre
      } catch (error) {
        console.log("ERROR FETCHING MOVIE DETAILS:", error);
      }
    };
    getFetchMovie();
  }, [contextOutlet.movieTitle, pagina]);

  return (
    <div className="">
      <div className="row">
        {movies
          .filter((movie) => movie.vote_average > rating * 2 - 2)
          .map((movie) => (
            //
            <div key={movie.id} className="col-12 col-md-6 col-lg-3">
              <Movie movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movies;

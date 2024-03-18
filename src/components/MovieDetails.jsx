import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=d7e867d9da9531a3b16dd16a7ad7e1f6`
        );

        setMovie(response.data);
      } catch (error) {
        console.log("ERROR FETCHING MOVIE DETAILS:", error);
      }
    };
    getMovieDetails();
  }, []);

  return (
    <>
      {movie ? (
        <div
          className="containerDetails"
          style={{
            backgroundImage: `url(
            https://image.tmdb.org/t/p/original${movie.poster_path})`,
          }}
        >
          <div className="contentDetails">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};

export default MovieDetails;

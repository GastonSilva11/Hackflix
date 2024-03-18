import { useState } from "react";
import ShowModal from "./ShowModal";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const open = () => setShow(true);

  return (
    <>
      <div className="Imgcontainer">
        <div className="mt-3 divImage">
          <Link to={`/pelicula/${movie.id}`}>
            <img
              onClick={open}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-100 object-fit-cover"
            />
          </Link>
        </div>
        <div>
          <ShowModal show={show} close={close} movie={movie} />
        </div>
      </div>
    </>
  );
};

export default Movie;

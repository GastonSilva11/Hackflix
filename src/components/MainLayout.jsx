import { Outlet } from "react-router-dom";
import NavScrollExample from "./Navbar";
import { useState } from "react";

const MainLayout = () => {
  const [movieTitle, setMovieTitle] = useState("");

  return (
    <div>
      <NavScrollExample movieTitle={movieTitle} setMovieTitle={setMovieTitle} />

      <Outlet context={{ movieTitle: movieTitle }} />

      <hr />
      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        voluptatibus itaque ullam animi nobis ea, nostrum adipisci repellat
        expedita atque facere, aperiam nam debitis praesentium ab ipsum. Veniam,
        molestiae similique?
      </footer>
    </div>
  );
};

export default MainLayout;

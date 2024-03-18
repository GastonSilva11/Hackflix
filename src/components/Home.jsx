import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Movies from "./Movies";
import Star from "./Star";

function Home() {
  const [rating, setRating] = useState(0);

  return (
    <div className="container">
      <div></div>
      <Star setRating={setRating} />
      <Movies rating={rating} /> {/* Pasa la calificación a Movie */}
    </div>
  );
}

export default Home;

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Movies from "./Movies";
import Star from "./Star";

function Paginador() {
  const [rating, setRating] = useState(0);
  const [pagina, setPagina] = useState(20);

  function functionX() {
    setPagina(pagina - 1);
  }
  console.log(pagina);
  return (
    <>
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                onClick={() => functionX()}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                onClick={() => setPagina(pagina - 1)}
              >
                {pagina - 1}
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                {pagina}
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                onClick={() => setPagina(pagina + 1)}
              >
                {pagina + 1}
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Star setRating={setRating} />
        <Movies rating={rating} pagina={pagina} />
        {/* Pasa la calificación a Movie */}
      </div>
    </>
  );
}

export default Paginador;

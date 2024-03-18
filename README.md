# React + Vite

Aplicacion que reune información de películas.
Filtra por calificación de las películas, con estrellas.
Al hacer click sobre una película, se abra un modal mostrando información detallada de la misma (título, rating, descripción, etc).
Se obtiene la informacion de las peliculas desde la API de The Movie Database.

Se reemplaza la interacción de click a una pelicula (modal) para que ahora, ante este evento, se muestre una nueva página conteniendo información detallada de la misma, con la ruta “/pelicula/:id”, siendo id el identificador de la película.  
 Cada vez que se entre a la página de una película, se haga una llamada a la API específica para traer los datos de la misma.

 A medida que se escribe el nombre de una película en el input de búsqueda, se hacen llamados a la API de The Movie Database 

 “/paginacion”.

Esta página es una réplica de la Home, pero con la diferencia de que en lugar de funcionar con un *scroll*, hace un paginador

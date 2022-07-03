import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const { detailID } = useParams();
  const [movie, setMovie] = useState({});

  const API_URL = "https://www.omdbapi.com?apikey=1d29bd10";

  const fetchMovie = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie(detailID);
  });

  if (movie.Error) {
    return <Navigate to={`/error/${detailID}`} />;
  }

  return (
    <section className="single-movie">
      <h1>Movie Detail Page</h1>
      <div className="section-center">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
        <article className="section-info">
          <div>
            <h2 className="title">{movie.Title}</h2>
            <p className="create-by">
              Directored by {movie.Director} and Written by {movie.Writer}
            </p>
            <span className="worth">Box office Price: {movie.BoxOffice}</span>
            <p className="plot">Plot: {movie.Plot}</p>
          </div>
        </article>
      </div>
      <Link className="link" to="/">
        Back
      </Link>
    </section>
  );
};

export default MovieDetailsPage;

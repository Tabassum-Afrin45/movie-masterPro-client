import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";


const AllMovies=()=> {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-master-pro-server-nu.vercel.app/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center my-6 text-green-800">All Movies</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;


import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { MovieCard } from "../../components/MovieCard";
const Home = () => {
  const { latest, topRated, featured, stats } = useLoaderData();

  return (
    <div>

      {/* Hero Section */}
      <Banner featured={featured} />


      {/* Top Rated Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Top Rated Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {topRated.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Recently Added Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Recently Added</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {latest.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>

    </div>
  );
};


export default Home;
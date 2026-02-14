
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { MovieCard } from "../../components/MovieCard";
const Home = () => {
  const { latest, topRated,stats } = useLoaderData();

  return (
    <div>

      {/* Hero Section */}
      <Banner />

      {/* Statistics Section */}
      <div className="mt-16 text-center border-4 border-green-800 rounded-4xl h-auto py-4">
        <h2 className="text-3xl font-bold text-green-800">Our Platform Statistics</h2>
        <div className="flex justify-center gap-10 mt-6">
          <div className="font-medium text-[17px]">Total Movies: {stats.totalMovies}</div>
          <div className="font-medium text-[17px]">Total Users: {stats.totalUsers}</div>
        </div>
      </div>

      {/* Top Rated Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-green-800">Top Rated Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {topRated.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Recently Added Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-green-800">Latest Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {latest.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
      {/* Genre Section (Static) */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-800">Genres</h2>
        <div className="grid grid-cols-3 md:grid-cols-7 place-items-center gap-6 mt-6">
          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Action</span>
          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Drama</span>
          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Comedy</span>
          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Thriller</span>

          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Sci-Fi</span>
 
          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Animation</span>
          <span className="badge badge-secondary px-7 py-4 bg-linear-to-r from-[#134E5E] to-green-500 border-none">Others</span>
        </div>
      </div>
      {/* About Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800">About Movie Master Pro</h2>
        <p className="mt-4">
          Movie Master Pro is a dynamic movie management platform where users
          can Explore, Add, and Manage movies with ratings and genres.
        </p>
      </div>
    </div>
  );
};


export default Home;
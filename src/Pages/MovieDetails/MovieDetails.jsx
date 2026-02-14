
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const MovieDetails = () => {
  const { user } = useContext(AuthContext);
  const data=useLoaderData()
  const movie=data.result
  console.log(movie)
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={movie.posterUrl}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">
              {movie.title}
            </h1>

            <div className="flex gap-3 mb-6">
              <div className="badge badge-lg badge-outline text-green-800 border-green-800 font-medium">
                {movie.genre}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Plot Summary:</span><br/>
              {movie.plotSummary}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Release Year: </span>
              {movie.releaseYear}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Ratings: </span>
              {movie.rating}/10
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Duration: </span>
              {movie.duration} min
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Director: </span>
              {movie.director}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Cast: </span>
              {movie.cast}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Country: </span>
              {movie.country}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg"><span className="font-bold text-green-800">Language: </span>
              {movie.language}
            </p>
    
            <div className="flex gap-3 mt-6">
              {user?.email === movie.addedBy && (
    <Link
      to={`/update-movie/${movie._id}`}
      className="btn-grad"
              >
                Update Movie
              </Link>
              )}
             
              {/* <button
                onClick={handleDelete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
              >
                Delete
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
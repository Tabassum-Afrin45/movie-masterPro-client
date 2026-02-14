import { Link } from "react-router";

export const MovieCard = ({movie}) => {
   const {_id, title, genre, posterUrl,rating } =movie

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-2">{title}</h2>
        <div className="flex items-center justify-between ml-1 mr-3">
        <div className="badge text-sm badge-sm badge-secondary bg-green-800 border-green-800 rounded-full">{genre}</div>
        <div className="badge text-sm badge-sm  badge-secondary  bg-white border-yellow-400 text-yellow-600 rounded-full">{rating} ⭐</div>
        </div>

        <div className="card-actions justify-between items-center mt-2">
          <div className="flex gap-4 text-sm text-base-content/60">
          </div>
          <Link to={`/movie-details/${_id}`} className="btn-grad w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};
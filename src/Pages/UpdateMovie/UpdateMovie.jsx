import { use } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

const UpdateMovie = () => {
  const data = useLoaderData();
  const movie = data.result;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      releaseYear: e.target.releaseYear.value,
      director: e.target.director.value,
      cast: e.target.cast.value,
      rating: e.target.rating.value,
      duration: e.target.duration.value,
      plotSummary: e.target.plotSummary.value,
      posterUrl: e.target.posterUrl.value,
      language: e.target.language.value,
      country: e.target.country.value,
      
    }

    fetch(`http://localhost:3000/movies/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        console.log(err);
      });

  };


  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto my-12 shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-3xl font-bold text-center my-auto py-2 text-green-800">Update Your Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              defaultValue={movie.title}
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter the Title"
            />
          </div>

          {/* Genre Dropdown */}
          <div>
            <label className="label font-medium">Genre</label>
            <select
              defaultValue={movie.genre}
              name="genre"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select The Genre
              </option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantic">Romantic</option>
              <option value="Animation">Animation</option>
              <option value="Action">Action</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Release Year Field */}
          <div>
            <label className="label font-medium">Release Year</label>
            <input
              type="text"
              defaultValue={movie.releaseYear}
              name="releaseYear"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter the Release Year"
            />
          </div>
          {/* Director Field */}
          <div>
            <label className="label font-medium">Director</label>
            <input
              type="text"
              defaultValue={movie.director}
              name="director"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter the Director Name"
            />
          </div>
          {/* Cast Field */}
          <div>
            <label className="label font-medium">Cast</label>
            <input
              type="text"
              defaultValue={movie.cast}
              name="cast"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter the Cast Name"
            />
          </div>
          {/* Rating Field */}
          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="text"
              defaultValue={movie.rating}
              name="rating"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Ratings"
            />
          </div>
          {/* Duration Field */}
          <div>
            <label className="label font-medium">Duration</label>
            <input
              type="text"
              defaultValue={movie.duration}
              name="duration"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Duration"
            />
          </div>
          {/* Plot Summary Textarea */}
          <div>
            <label className="label font-medium">Plot Summary</label>
            <textarea
              name="plotSummary"
              defaultValue={movie.plotSummary}
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-62.5"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Poster URL */}
          <div>
            <label className="label font-medium">Poster URL</label>
            <input
              type="url"
              defaultValue={movie.posterUrl}
              name="posterUrl"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {/* Language Field */}
          <div>
            <label className="label font-medium">Language</label>
            <input
              type="text"
              defaultValue={movie.language}
              name="language"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter the Language"
            />
          </div>
          {/* Country Field */}
          <div>
            <label className="label font-medium">Country</label>
            <input
              type="text"
              defaultValue={movie.country}
              name="country"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter the Country"
            />
          </div>
          {/* Added By */}
          <div>
            <label className="label font-medium">Added By</label>
            <input
              type="email"
              name="addedBy"
              defaultValue={movie.addedBy}
              readOnly
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Your Email"
            />
          </div>

          {/* Submit Button */}
          <div className="grid place-items-center">
            <button
              type="submit"
              className="w-full btn-grad"
            >
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
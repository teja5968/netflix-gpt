import React from 'react';
import { useLocation } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';

const MovieInfo = () => {
  const location = useLocation();

  // Destructure the movieInfo and posterPath from location.state
  const { movieInfo, posterPath } = location.state || {}; // Default to an empty object if state is undefined

  if (!movieInfo || !posterPath) {
    return <p className="text-center text-xl text-red-500">No movie information or poster available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      {/* Movie Title */}
      <h1 className="text-3xl font-semibold text-center text-gray-900">{movieInfo.title}</h1>

      {/* Movie Poster */}
      <div className="flex justify-center">
        <img
          className="rounded-lg shadow-lg w-72 sm:w-96 md:w-1/2" // Control image size: 18rem, 24rem, 50% of the container width
          src={IMG_CDN_URL + posterPath}
          alt={movieInfo.title}
          loading="lazy"
        />
      </div>

      {/* Movie Overview */}
      <div className="space-y-4">
        <p className="text-lg text-gray-700">{movieInfo.overview}</p>

        {/* Release Date */}
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span className="font-semibold">Release Date:</span>
          <span>{movieInfo.release_date}</span>
        </div>
      </div>

      {/* Optional: Add a back button */}
      <div className="text-center mt-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Back to Previous Page
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;

import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar, FaRegStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, details, image_url, author, total_view, rating, tags } = news;

  // Function to render stars based on rating number
  const renderStars = (ratingNum) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingNum) {
        stars.push(<FaStar key={i} className="text-orange-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="card w-full max-w-2xl bg-base-100 border border-gray-200 rounded-lg shadow-sm mb-8 overflow-hidden">
      {/* 1. Header: Author Info & Actions */}
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img 
            src={author.img} 
            alt={author.name} 
            className="w-10 h-10 rounded-full object-cover border border-gray-200" 
          />
          <div>
            <h4 className="text-sm font-bold text-gray-800 leading-none">{author.name}</h4>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaRegBookmark className="hover:text-blue-500 transition-colors" />
          <FaShareAlt className="hover:text-blue-500 transition-colors" />
        </div>
      </div>

      {/* 2. Title Section */}
      <div className="px-4 py-3">
        <h2 className="text-xl font-extrabold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors leading-snug">
          {title}
        </h2>
      </div>

      {/* 3. Featured Image */}
      <div className="px-4">
        <img 
          src={image_url} 
          alt="news thumbnail" 
          className="w-full h-64 object-cover rounded-md"
        />
      </div>

      {/* 4. Details & Tags */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-semibold italic">Tags: </span>
          {tags.join(", ")}
        </p>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}... 
              <span className="text-orange-500 font-bold cursor-pointer hover:underline ml-1">
                Read More
              </span>
            </>
          ) : details}
        </p>

        <hr className="my-4 border-gray-100" />

        {/* 5. Footer: Ratings & Views */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-lg">
              {renderStars(rating.number)}
            </div>
            <span className="text-sm font-bold text-gray-500 ml-1">
              {rating.number.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
            <FaRegEye className="text-lg" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
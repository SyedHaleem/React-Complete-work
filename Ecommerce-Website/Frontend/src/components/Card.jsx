import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Image2 from '../assets/img2.jpg';

function Card({product}) {
 

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  const [rating, setRating] = useState(product.rating);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-10 w-[300px] mx-10">
      <div className="container mx-auto">
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden p-4 relative transition-all duration-500 ease-in-out transform hover:scale-95 hover:shadow-[0px_0px_5px_5px_rgba(204,204,204,1)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img className="w-full h-48 object-contain " src={product.image} alt={product.title} />  {/* object-cover object-center */}
          <div className="mt-4">
            <h5
              className="text-base font-bold"
              title={product.title.length >= 50 ? product.title : null}
            >
              {Truncate(product.title, 55)}
            </h5>
            <p className="mt-2 text-sm text-gray-400"> 
              {Truncate(product.description, 55)}
            </p>
            <p className="mt-3 text-base font-bold text-red-600">
              ${product.price}
            </p>
            <div className=" flex items-center">
              <StarRatings
                rating={rating}
                starRatedColor="#ffc107"
                starEmptyColor="#e4e5e9"
                starDimension="20px"
                starSpacing="1px"
              />
              <button
                className={`bg-green-500 hover:bg-green-700 text-white py-2 px-4 border rounded ml-7 ${
                  isHovered ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700 ease-in-out transition`}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

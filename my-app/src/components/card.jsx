import React from 'react';

const Card = ({ title, description, imageUrl, buttonText }) => {
  console.log("Card component rendered with title:", title);

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

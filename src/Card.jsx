import React, { useState } from 'react';

const Card = ({ title, capacity, price, image }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {capacity.trim() && <p className="text-gray-600">Capacity: {capacity}</p>}
        <p className="text-yellow-500 text-lg">Price: ${price}</p>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleDecrease}
            className={`text-xl text-gray-500 ${count === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={count === 0}
          >
            -
          </button>
          <span className="text-lg font-bold">{count}</span>
          <button onClick={handleIncrease} className="text-xl text-gray-500">+</button>
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="font-semibold text-lg">Total: ${count * price}</p>
      </div>
    </div>
  );
};

export default Card;

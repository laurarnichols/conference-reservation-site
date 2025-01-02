import React, { useState } from 'react';

const CateringSection = ({ header, options }) => {
  const [numPeople, setNumPeople] = useState(0);
  const [selections, setSelections] = useState(
    options.map(option => ({ ...option, count: 0 }))
  );

  const handleCountChange = (index, value) => {
    setSelections(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, count: Math.max(0, value) } : item
      )
    );
  };

  const totalCost = selections.reduce((acc, item) => acc + item.count * item.price * numPeople, 0);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4">{header}</h2>
      <div className="mb-4">
        <label htmlFor="numPeople" className="block text-lg font-medium text-gray-700 mb-2">
          Number of People:
        </label>
        <input
          type="number"
          id="numPeople"
          value={numPeople}
          onChange={e => setNumPeople(Math.max(0, Number(e.target.value)))}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {selections.map((option, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold">{option.title}</h3>
            <p className="text-yellow-500 text-lg">Price per Person: ${option.price}</p>
            <div className="mt-4 flex items-center">
              <button
                onClick={() => handleCountChange(index, option.count - 1)}
                className={`text-xl text-gray-500 ${option.count === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={option.count === 0}
              >
                -
              </button>
              <span className="mx-4 text-lg font-bold">{option.count}</span>
              <button
                onClick={() => handleCountChange(index, option.count + 1)}
                className="text-xl text-gray-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right font-semibold text-lg">Total: ${totalCost}</div>
    </div>
  );
};

export default CateringSection;

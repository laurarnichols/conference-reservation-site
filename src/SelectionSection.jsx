import React from 'react';
import Card from './Card';

const SelectionSection = ({ header, options }) => {
  const totalCost = options.reduce((acc, option) => acc + option.count * option.price, 0);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4">{header}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <Card key={index} 
                title={option.title} 
                capacity={option.capacity} 
                price={option.price} 
                image={option.image}
          />
        ))}
      </div>
      <div className="mt-4 text-right font-semibold text-lg">Total: ${totalCost}</div>
    </div>
  );
};

export default SelectionSection;

import React from 'react';
import SelectionSection from './SelectionSection';

const EventSelectionsOverlay = ({ toggleOverlay }) => {
  // Dummy data for sections and cards
  const sectionsData = [
    {
      header: "Room Options",
      options: [
        { title: "Small Room", capacity: "10 people", price: 100, count: 0 },
        { title: "Medium Room", capacity: "25 people", price: 200, count: 0 },
        { title: "Large Room", capacity: "50 people", price: 400, count: 0 },
      ]
    },
    {
      header: "Catering Options",
      options: [
        { title: "Coffee & Snacks", capacity: "Up to 50 people", price: 50, count: 0 },
        { title: "Full Meal", capacity: "Up to 50 people", price: 150, count: 0 },
        { title: "Finger Foods", capacity: "Up to 50 people", price: 120, count: 0 },
      ]
    },
    {
      header: "Audio/Visual Options",
      options: [
        { title: "Projector", capacity: "1 unit", price: 80, count: 0 },
        { title: "Speakers", capacity: "Up to 100 people", price: 150, count: 0 },
        { title: "Microphone", capacity: "1 unit", price: 50, count: 0 },
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Full screen semi-transparent background */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center h-screen">
        {/* Modal content with scrollable section */}
        <div className="bg-white p-8 rounded-lg w-full md:w-3/4 max-h-screen overflow-y-auto">
          <h2 className="text-3xl font-semibold mb-4">Select Your Options</h2>
          {sectionsData.map((section, index) => (
            <SelectionSection key={index} header={section.header} options={section.options} />
          ))}
          <div className="flex justify-end mt-6">
            <button onClick={toggleOverlay} className="bg-red-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSelectionsOverlay;

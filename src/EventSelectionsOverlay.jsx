import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectionSection from './SelectionSection';
import { venueData } from './venueData';
import CateringSection from './CateringSection';
import { cateringData } from './cateringData';

const EventSelectionsOverlay = ({ toggleOverlay }) => {
  const [venueOptions, setVenueOptions] = useState([]);
  const [cateringOptions, setCateringOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating fetching data using useEffect and axios
  useEffect(() => {
    // Here we are simulating fetching data from an external source
    setTimeout(() => {
      // Use the imported mock data here
      setVenueOptions(venueData);  
      setCateringOptions(cateringData);
      setLoading(false);
    }, 1000); // Simulate a delay to mimic a real fetch
  }, []);

  return (
    <div className="relative">
      {/* Full screen semi-transparent background */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center h-screen">
        {/* Modal content with scrollable section */}
        <div className="bg-white p-8 rounded-lg w-full md:w-3/4 max-h-screen overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <p className="text-gray-500 text-3xl font-semibold">Loading...</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-semibold mb-4">Select Your Options</h2>
              {venueOptions.map((section, index) => (
                <SelectionSection key={index} header={section.header} options={section.options} />
              ))}
              <CateringSection header="Catering Options" options={cateringOptions}/>
            </>
          )}
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

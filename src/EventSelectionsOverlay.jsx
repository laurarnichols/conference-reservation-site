import SelectionSection from "./SelectionSection";
import CateringSection from "./CateringSection";
import DetailsTable from "./DetailsTable";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

const EventSelectionsOverlay = ({ toggleOverlay }) => {
  const { cateringCost, venueLocations, avOptions } = useSelector((state) => {
    return {
      cateringCost: state.catering.cateringCost,
      venueLocations: state.venue.venueLocations,
      avOptions: state.venue.avOptions,
    };
  });

  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (showDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDetails]);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Full screen semi-transparent background */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center h-screen">
        {/* Modal content with scrollable section */}
        <div className="bg-white rounded-lg w-full md:w-3/4 max-h-screen overflow-y-auto relative">
          {/* Sticky top section */}
          <div className="sticky top-0 bg-white z-10 p-8">
            {/* Close button */}
            <button
              onClick={toggleOverlay}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-4">Select Your Options</h2>
            <div className="flex justify-center items-center">
              <div className="text-right font-semibold text-xl mr-4">
                Total: $
                {cateringCost + venueLocations.totalCost + avOptions.totalCost}
              </div>
              <button
                onClick={handleShowDetails}
                className="text-blue-600 underline ml-4"
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>
          <SelectionSection storeKey="venueLocations" />
          <SelectionSection storeKey="avOptions" />
          <CateringSection header="Catering Options" />
          {showDetails && <DetailsTable ref={detailsRef} />}
        </div>
      </div>
    </div>
  );
};

EventSelectionsOverlay.propTypes = {
  toggleOverlay: PropTypes.func.isRequired,
};

export default EventSelectionsOverlay;

import SelectionSection from "./SelectionSection";
import CateringSection from "./CateringSection";
import PropTypes from "prop-types";

const EventSelectionsOverlay = ({ toggleOverlay }) => {

  return (
    <div className="relative">
      {/* Full screen semi-transparent background */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center h-screen">
        {/* Modal content with scrollable section */}
        <div className="bg-white p-8 rounded-lg w-full md:w-3/4 max-h-screen overflow-y-auto">
          <h2 className="text-3xl font-semibold mb-4">Select Your Options</h2>
          <SelectionSection storeKey="venueLocations"/>
          <SelectionSection storeKey="avOptions" />
          <CateringSection header="Catering Options" />
          <div className="flex justify-end mt-6">
            <button
              onClick={toggleOverlay}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EventSelectionsOverlay.propTypes = {
  toggleOverlay: PropTypes.func.isRequired,
};

export default EventSelectionsOverlay;

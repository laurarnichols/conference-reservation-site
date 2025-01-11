import PropTypes from "prop-types";
import Card from "./Card";
import { useSelector } from "react-redux";

const SelectionSection = ({ storeKey }) => {
  const { header, count, totalCost } = useSelector((state) => {
    return {
      header: state.venue[storeKey].header,
      count: state.venue[storeKey].count,
      totalCost: state.venue[storeKey].totalCost,
    };
  });

  const cards = Array.from({ length: count }, (_, i) => (
    <Card key={i} index={i} storeKey={storeKey} />
  ));

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 ml-8 mr-8">
      <h2 className="text-2xl font-semibold mb-4">{header}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards}
      </div>
      <div className="mt-4 text-right font-semibold text-lg">
        Subtotal: ${totalCost}
      </div>
    </div>
  );
};

SelectionSection.propTypes = {
  storeKey: PropTypes.string.isRequired,
};

export default SelectionSection;

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { incrementVenueCount, decrementVenueCount } from "./venueSlice";

const Card = ({ storeKey, index }) => {
  const dispatch = useDispatch();

  const { title, capacity, price, count, image } = useSelector((state) => {
    const option = state.venue[storeKey].options[index];
    return {
      title: option.title,
      capacity: option.capacity,
      price: option.price,
      count: option.count,
      image: option.image
    };
  });

  const handleIncrease = () => dispatch(incrementVenueCount({storeKey, index}));
  const handleDecrease = () => dispatch(decrementVenueCount({storeKey, index}));

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {storeKey === "venueLocations" && (
          <p className="text-gray-600">Capacity: {capacity}</p>
        )}
        <p className="text-yellow-500 text-lg">Price: ${price}</p>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleDecrease}
            className={`text-xl text-gray-500 ${
              count === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={count === 0}
          >
            -
          </button>
          <span className="text-lg font-bold">{count}</span>
          <button onClick={handleIncrease} className="text-xl text-gray-500">
            +
          </button>
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="font-semibold text-lg">Total: ${count * price}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  storeKey: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;

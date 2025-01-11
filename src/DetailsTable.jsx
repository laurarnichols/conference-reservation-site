import { useSelector } from "react-redux";
import { forwardRef } from "react";

const DetailsTable = forwardRef((props, ref) => {
  const { cateringOptions, venueOptions, avOptions, numPeople } = useSelector(
    (state) => {
      return {
        cateringOptions: state.catering.options,
        venueOptions: state.venue.venueLocations.options,
        avOptions: state.venue.avOptions.options,
        numPeople: state.catering.numPeople,
      };
    }
  );

  const filteredOptions = (options) =>
    options.filter((option) => option.count > 0);

  const totalCost =
    filteredOptions(venueOptions).reduce(
      (acc, option) => acc + option.count * option.price,
      0
    ) +
    filteredOptions(avOptions).reduce(
      (acc, option) => acc + option.count * option.price,
      0
    ) +
    filteredOptions(cateringOptions).reduce(
      (acc, option) => acc + option.count * option.price * numPeople,
      0
    );

  return (
    <div className="m-8" ref={ref}>
      <h3 className="text-2xl font-semibold mb-4">Details</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-gray-300">Selection</th>
            <th className="py-2 px-4 border border-gray-300">Count</th>
            <th className="py-2 px-4 border border-gray-300">Price</th>
            <th className="py-2 px-4 border border-gray-300">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {filteredOptions(venueOptions).map((option, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border border-gray-300 text-center">
                {option.title}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {option.count}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                ${option.price}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                ${option.count * option.price}
              </td>
            </tr>
          ))}
          {filteredOptions(avOptions).map((option, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border border-gray-300 text-center">
                {option.title}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {option.count}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                ${option.price}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                ${option.count * option.price}
              </td>
            </tr>
          ))}
          {filteredOptions(cateringOptions).map((option, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border border-gray-300 text-center">
                {option.title}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {option.count} X {numPeople} people
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                ${option.price}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                ${option.count * option.price * numPeople}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td
              colSpan="3"
              className="py-2 px-4 border border-gray-300 text-right font-semibold"
            >
              Total:
            </td>
            <td className="py-2 px-4 border border-gray-300 text-center">
              ${totalCost}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

DetailsTable.displayName = "DetailsTable";

export default DetailsTable;

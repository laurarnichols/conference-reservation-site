import { useState } from "react";
import LandingPage from "./LandingPage";
import EventSelectionsOverlay from "./EventSelectionsOverlay";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [showEventSelections, setShowEventSelections] = useState(false);

  return (
    <Provider store={store}>
      <LandingPage
        toggleOverlay={() => setShowEventSelections(!showEventSelections)}
      />
      {showEventSelections ? (
        <EventSelectionsOverlay
          toggleOverlay={() => setShowEventSelections(!showEventSelections)}
        />
      ) : (
        ""
      )}
    </Provider>
  );
}

export default App;

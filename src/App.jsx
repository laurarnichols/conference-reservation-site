import { useState } from 'react'
import LandingPage from './LandingPage';
import EventSelectionsOverlay from './EventSelectionsOverlay';

function App() {
  const [showEventSelections, setShowEventSelections] = useState(false);

  return (
    <>
      <LandingPage toggleOverlay={() => setShowEventSelections(!showEventSelections)} />
      {showEventSelections ? <EventSelectionsOverlay toggleOverlay={() => setShowEventSelections(!showEventSelections)} /> : ''}
    </>
  )
}

export default App

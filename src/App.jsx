import { useState } from 'react'
import LandingPage from './LandingPage';

function App() {
  const [showVenue, setShowVenue] = useState(false);

  return (
    <>
      <LandingPage />
    </>
  )
}

export default App

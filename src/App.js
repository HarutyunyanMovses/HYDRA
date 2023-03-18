import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHydra from './components/AppHydra';
import LoadingSpinner from './loading/Loading';
import Admin from './admin/Admin';
function App() {
  const [loading, setLoading] = useState(false)
  console.log(1);
  window.addEventListener("load", (e) => {
    setTimeout(() => {
      setLoading(true)
    }, 3000);
    return true
  })

  return (
    <>
      {
        !loading ? <LoadingSpinner /> : <></>
      }
      <div className='wrapper' style={{ display: !loading ? "none" : 'block' }}>
        <Routes>
          <Route path="/" element={<AppHydra />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>

    </>
  );
}

export default App;

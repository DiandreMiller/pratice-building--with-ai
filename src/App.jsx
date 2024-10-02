import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FourOFour from './Pages/FourOFour';
import Navbar from './Components/Navbar'; // Make sure this path is correct
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <h1>Reviews Website Prompt Project</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StationList from './pages/StationList';
import StationDetails from './pages/StationDetails';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stations" element={<StationList />} />
        <Route path="/stations/:id" element={<StationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import CrystalsPage from './pages/CrystalsPage/CrystalsPage';
import PhysicalIllnessesPage from './pages/PhysicalIllnessesPage/PhysicalIllnessesPage';
import MentalIllnessesPage from './pages/MentalIllnessesPage/MentalIllnessesPage';
import CrystalDetails from './components/CrystalDetails/CrystalDetails';
import IllnessDetails from './components/IllnessDetails/IllnessDetails'
import './App.css';

function App() {

  return (
    <>
      <header>
        <img className='logo' src="/logo.png" alt="logo" />
        <h1>Gyógyító kristályok</h1>
      </header>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crystals" element={<CrystalsPage />} />
          <Route path="/crystals/:id" element={<CrystalDetails />} />
          <Route path="/physical-illnesses" element={<PhysicalIllnessesPage />} />
          <Route path="/physical-illnesses/:id" element={<IllnessDetails />} />
          <Route path="/mental-illnesses" element={<MentalIllnessesPage />} />
          <Route path="/mental-illnesses/:id" element={<IllnessDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

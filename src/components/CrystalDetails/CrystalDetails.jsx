import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import crystalsData from '../../data/crystals.json';
import './CrystalDetails.css';

function CrystalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from || '/crystals';
  const crystal = crystalsData.find((crystal) => crystal.id === Number(id));
  const hardnessText = crystal.hardness.map(value => value).join(', ');

  if (!crystal) {
    return <p>Kristály nem található.</p>;
  }


  return (
    <div className='crystalDetails-container'>
      <h2>{crystal.name}</h2>
      <p><span>Leírás:</span> {crystal.description}</p>
      <p><span>Szín:</span> {crystal.color}</p>
      <p><span>Mohs-keménység:</span> {hardnessText}</p>
      <p><span>Eredet:</span> {crystal.origin}</p>
      <button className='btn' onClick={() => navigate(previousPath)}>Vissza</button>
    </div>
  );
}

export default CrystalDetails;

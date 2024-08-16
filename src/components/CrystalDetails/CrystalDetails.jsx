import React from 'react';
import { useParams, useNavigate , useLocation } from 'react-router-dom';
import crystalsData from '../../data/crystals.json';

function CrystalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from || '/crystals';
  const crystal = crystalsData.find((crystal) => crystal.id === Number(id));

  if (!crystal) {
    return <p>Kristály nem található.</p>;
  }

  return (
    <div>
      <h2>{crystal.name}</h2>
      <p>{crystal.description}</p>
      <button onClick={() => navigate(previousPath)}>Vissza</button>
    </div>
  );
}

export default CrystalDetails;

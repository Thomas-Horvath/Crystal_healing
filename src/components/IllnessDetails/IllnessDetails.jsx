import React from 'react';
import { useParams, useNavigate , useLocation } from 'react-router-dom';
import physicalIllnessesData from '../../data/physicalIllnesses.json';
import mentalIllnessesData from '../../data/mentalIllnesses.json';

function IllnessDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.fromFilter ? '/' : location.state?.form || '/physical-illnesses';
  const type = location.state?.type;

  let illness;
  if (type === 'physical-illnesses') {
    illness = physicalIllnessesData.find((illness) => illness.id === Number(id));
  } else if (type === 'mental-illnesses') {
    illness = mentalIllnessesData.find((illness) => illness.id === Number(id));
  }

  if (!illness) {
    return <p>Betegség nem található.</p>;
  }

  return (
    <div>
      <h2>{illness.name}</h2>
      <p>{illness.description}</p>
      <button onClick={() => navigate(previousPath)}>Vissza</button>
    </div>
  );
}

export default IllnessDetails;

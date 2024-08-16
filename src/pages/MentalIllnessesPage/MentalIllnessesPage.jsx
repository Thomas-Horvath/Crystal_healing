import React from 'react';
import mentalIllnessesData from '../../data/mentalIllnesses.json';
import Results from '../../components/Results/Results';

function MentalIllnessesPage() {


  return (
    <div>
      <h2>Lelki betegségek</h2>
      <Results items={mentalIllnessesData} type="mental-illnesses" />
    </div>
  );
}

export default MentalIllnessesPage;

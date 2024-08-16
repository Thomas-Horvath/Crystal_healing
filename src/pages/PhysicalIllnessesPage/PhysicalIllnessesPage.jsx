import React from 'react';
import physicalIllnessesData from '../../data/physicalIllnesses.json';
import Results from '../../components/Results/Results';

function PhysicalIllnessesPage() {
  return (
    <div>
      <h2>Fizikai betegségek</h2>
      <Results items={physicalIllnessesData} type="physical-illnesses" />
    </div>
  );
}

export default PhysicalIllnessesPage;

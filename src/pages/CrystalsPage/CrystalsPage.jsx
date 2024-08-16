import React from 'react';
import crystalsData from '../../data/crystals.json';
import Results from '../../components/Results/Results';

function CrystalsPage() {


  return (
    <div>
      <h2>Kristályok</h2>
      <Results items={crystalsData} type="crystals" />
    </div>
  );
}

export default CrystalsPage;

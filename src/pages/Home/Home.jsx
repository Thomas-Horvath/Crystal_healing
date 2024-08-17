import React, { useState , useEffect } from 'react';
import crystalsData from '../../data/crystals.json';
import physicalIllnessesData from '../../data/physicalIllnesses.json';
import mentalIllnessesData from '../../data/mentalIllnesses.json';
import FilterForm from '../../components/FilterForm/FilterForm';
import Results from '../../components/Results/Results';

function Home() {
  const [filteredIllnesses, setFilteredIllnesses] = useState([]);
  const [selectedCrystal, setSelectedCrystal] = useState('');
  const [illnessType, setIllnessType] = useState('physical');

  useEffect(() => {
    const savedFilterState = sessionStorage.getItem('filterState');
    if (savedFilterState) {
      const { crystalId, type } = JSON.parse(savedFilterState);
      handleFilterChange(crystalId, type);
    }
  }, []);

  const handleFilterChange = (crystalId, type) => {
    setSelectedCrystal(crystalId);
    setIllnessType(type);
    
    sessionStorage.setItem('filterState', JSON.stringify({ crystalId, type }));

    const illnessData = type === 'physical' ? physicalIllnessesData : mentalIllnessesData;
    const filtered = illnessData.filter((illness) =>
      illness.crystals.includes(Number(crystalId))
    );

    setFilteredIllnesses(filtered);
  };


  return (
    <div>
      <h2>Főoldal</h2>
      <FilterForm crystals={crystalsData} onFilterChange={handleFilterChange} />
      <Results
        items={filteredIllnesses} title={selectedCrystal}
        type={illnessType === 'physical' ? 'physical-illnesses' : 'mental-illnesses'}
        fromFilter={true}
      />
    </div>
  );
}

export default Home;
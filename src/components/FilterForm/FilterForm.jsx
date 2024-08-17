import React, { useState, useEffect } from 'react';
import './FilterForm.css';

function FilterForm({ crystals, onFilterChange }) {
  const [selectedCrystal, setSelectedCrystal] = useState('');
  const [illnessType, setIllnessType] = useState('physical');

  useEffect(() => {
    const savedFilterState = sessionStorage.getItem('filterState');
    if (savedFilterState) {
      const { crystalId, type } = JSON.parse(savedFilterState);
      setSelectedCrystal(crystalId);
      setIllnessType(type);
    }
  }, []);

  const handleFilterChange = () => {
    onFilterChange(selectedCrystal, illnessType);
  };

  const handleReset = () => {
    setSelectedCrystal('');
    setIllnessType('physical');
    sessionStorage.removeItem('filterState');
    onFilterChange('', 'physical'); // Reset the results
  };

  const sortedCrystals = [...crystals].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='form-container'>
      <h3>Keresés kristály szerint</h3>
      <div className="select-container">

        <label >
          Válassz kristályt: 
          <select

            value={selectedCrystal}
            onChange={(e) => setSelectedCrystal(e.target.value)}
          >
            <option value="">Összes kristály</option>
            {sortedCrystals.map((crystal) => (
              <option key={crystal.id} value={crystal.id}>
                {crystal.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="radio-container">

        <label htmlFor='physical'>
          Fizikai betegségek
          <input
            id='physical'
            type="radio"
            name="illnessType"
            value="physical"
            checked={illnessType === 'physical'}
            onChange={() => setIllnessType('physical')}
          />
        </label>
        <label htmlFor='mental'>
          Lelki betegségek
          <input
            id='mental'
            type="radio"
            name="illnessType"
            value="mental"
            checked={illnessType === 'mental'}
            onChange={() => setIllnessType('mental')}
          />
        </label>
      </div>
      <div className="button-container">
        <button className='btn' onClick={handleFilterChange}>Szűrés</button>
        <button className='btn' type="button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default FilterForm;

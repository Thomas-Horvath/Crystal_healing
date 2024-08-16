import React, { useState , useEffect } from 'react';

function FilterForm({ crystals, onFilterChange }) {
  const [selectedCrystal, setSelectedCrystal] = useState('');
  const [illnessType, setIllnessType] = useState('physical');

  useEffect(() => {
    const savedFilterState = localStorage.getItem('filterState');
    if (savedFilterState) {
      const { crystalId, type } = JSON.parse(savedFilterState);
      setSelectedCrystal(crystalId);
      setIllnessType(type);
    }
  }, []);

  const handleFilterChange = () => {
    onFilterChange(selectedCrystal, illnessType);
  };

  return (
    <div>
      <h3>Szűrő beállítások</h3>
      <label>
        Válassz kristályt:
        <select
          value={selectedCrystal}
          onChange={(e) => setSelectedCrystal(e.target.value)}
        >
          <option value="">Összes kristály</option>
          {crystals.map((crystal) => (
            <option key={crystal.id} value={crystal.id}>
              {crystal.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Fizikai
        <input
          type="radio"
          name="illnessType"
          value="physical"
          checked={illnessType === 'physical'}
          onChange={() => setIllnessType('physical')}
        />
        Lelki
        <input
          type="radio"
          name="illnessType"
          value="mental"
          checked={illnessType === 'mental'}
          onChange={() => setIllnessType('mental')}
        />
      </label>
      <button onClick={handleFilterChange}>Szűrés</button>
    </div>
  );
}

export default FilterForm;

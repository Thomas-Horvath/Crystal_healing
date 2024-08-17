import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Results({ items, type, fromFilter }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/${type}/${item.id}`, { state: { from: `/${type}`, type, fromFilter } });
  };


  const location = useLocation();
  const currentPath = location.pathname;


  if (!items) return null;


  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));


  return (
    <div>
      {currentPath === '/' ? <h2>A keresés eredménye:</h2> : ''}
      <ul>
        {items.length === 0 ? (
          <li>Nincs kiválasztva keresés</li>
        ) : (
          sortedItems.map((item) => (
            <li key={item.id}>
              <p onClick={() => handleClick(item)}>
                {item.name}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Results;

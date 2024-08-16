import React from 'react';
import { useNavigate } from 'react-router-dom';

function Results({ items, type , fromFilter}) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/${type}/${item.id}`, { state: { from: `/${type}`, type , fromFilter } });
  };

  if (!items) return null;

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p onClick={() => handleClick(item)}>
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;

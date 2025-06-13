import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={toggleVisibility}
        style={{ padding: '8px 16px', fontSize: '14px', marginBottom: '10px' }}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      
      {isVisible && (
        <p style={{ fontSize: '16px' }}>
          Toggle me!
        </p>
      )}
    </div>
  );
};

export default ToggleVisibility;
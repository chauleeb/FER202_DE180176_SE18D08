import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = [
    { value: 'white', label: 'White' },
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'purple', label: 'Purple' },
    { value: 'orange', label: 'Orange' }
  ];

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Color Switcher</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '16px', marginRight: '10px' }}>
          Choose a color:
        </label>
        <select 
          value={selectedColor} 
          onChange={handleColorChange}
          style={{ padding: '8px', fontSize: '16px' }}
        >
          {colors.map(color => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>

      <div 
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: selectedColor,
          border: '2px solid #333',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          color: selectedColor === 'yellow' || selectedColor === 'white' ? 'black' : 'white'
        }}
      >
        Background Color: {selectedColor}
      </div>
    </div>
  );
};

export default ColorSwitcher;
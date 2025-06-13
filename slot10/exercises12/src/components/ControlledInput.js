import React, { useState } from 'react';

const ControlledInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ padding: '8px', fontSize: '14px', marginBottom: '10px', width: '200px' }}
      />
      <p style={{ fontSize: '16px' }}>
        {inputText}
      </p>
    </div>
  );
};

export default ControlledInput;
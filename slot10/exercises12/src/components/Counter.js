import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>Count: {count}</p>
      <button onClick={increment} style={{ padding: '8px 16px', fontSize: '14px' }}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
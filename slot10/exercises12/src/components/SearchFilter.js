import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const items = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
    'Mango', 'Orange', 'Papaya', 'Quince', 'Raspberry'
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search items..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '100%',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />
      
      <div>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Found {filteredItems.length} items
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: '8px 12px',
                margin: '5px 0',
                backgroundColor: '#f5f5f5',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        
        {filteredItems.length === 0 && searchQuery && (
          <p style={{ color: '#999', fontStyle: 'italic' }}>
            No items found matching "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
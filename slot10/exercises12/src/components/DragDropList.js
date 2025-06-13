import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState([
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggingItem === null) return;
    
    const draggedItem = items[draggingItem];
    const newItems = [...items];
    
    // Remove the dragged item from its original position
    newItems.splice(draggingItem, 1);
    
    // Insert the dragged item at the new position
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Drag and Drop List</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
        Drag and drop items to reorder the list
      </p>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: '15px',
              margin: '8px 0',
              backgroundColor: draggingItem === index ? '#e0e0e0' : '#f8f8f8',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'move',
              fontSize: '16px',
              transition: 'background-color 0.2s',
              userSelect: 'none'
            }}
            onMouseEnter={(e) => {
              if (draggingItem === null) {
                e.target.style.backgroundColor = '#f0f0f0';
              }
            }}
            onMouseLeave={(e) => {
              if (draggingItem !== index) {
                e.target.style.backgroundColor = '#f8f8f8';
              }
            }}
          >
            <span style={{ marginRight: '10px' }}>⋮⋮</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;
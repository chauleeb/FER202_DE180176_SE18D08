import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';

function App() {
  return (
    <div className="App">

      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 1: Counter</h3>
          <Counter />
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 2: Controlled Input</h3>
          <ControlledInput />
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 3: Toggle Visibility</h3>
          <ToggleVisibility />
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 4: Todo List</h3>
          <TodoList />
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 5: Color Switcher</h3>
          <ColorSwitcher />
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 6: Search Filter</h3>
          <SearchFilter />
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#444', marginBottom: '15px' }}>Exercise 7: Drag and Drop List</h3>
          <DragDropList />
        </div>

      </div>
    </div>
  );
}

export default App;
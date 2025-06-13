import React from 'react';
     import Counter from './components/Counter';
     import NameAgeInput from './components/NameAgeInput';
     import ProductList from './components/ProductList';
     import ProductRadioList from './components/ProductRadioList';

     function App() {
       return (
         <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
           <h1>React useState</h1>
           <Counter />
           <NameAgeInput />
           <ProductList />
           <ProductRadioList />
         </div>
       );
     }

     export default App;
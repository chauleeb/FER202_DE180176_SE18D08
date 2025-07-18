import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Shopping Cart - Exercise 24</h1>
                <ProductList />
                <Cart />
            </div>
        </Provider>
    );
}

export default App;
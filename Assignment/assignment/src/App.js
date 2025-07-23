import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Alert, Spinner, Button } from 'react-bootstrap';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import FoodDetail from './components/FoodDetail';
import AddFood from './components/AddFood';
import EditFood from './components/EditFood';
import DeleteFoodList from './components/DeleteFoodList';
import Login from './components/Login'; // Import Login
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct, updateProduct } from './redux/productSlice';

function App() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.product.items);
  const loading = useSelector((state) => state.product.status) === 'loading';
  const error = useSelector((state) => state.product.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddFood = async (newFood) => {
    if (isAuthenticated) {
      await dispatch(addProduct(newFood));
    } else {
      alert('Vui lòng đăng nhập để thêm món ăn!');
    }
  };

  const handleDeleteFood = async (id) => {
    if (isAuthenticated) {
      await dispatch(deleteProduct(id));
    } else {
      alert('Vui lòng đăng nhập để xóa món ăn!');
    }
  };

  const handleUpdateFood = async (updatedFood) => {
    if (isAuthenticated) {
      await dispatch(updateProduct(updatedFood));
    } else {
      alert('Vui lòng đăng nhập để sửa món ăn!');
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Đang tải dữ liệu...</p>
        </div>
      </Container>
    );
  }

  return (
    <Router>
      <Navbar />
      <Container>
        {error && (
          <Alert variant="danger" className="mt-3" dismissible>
            {error} <Button variant="outline-danger" size="sm">Đóng</Button>
          </Alert>
        )}
        <Routes>
          <Route path="/" element={<FoodList foods={foods} />} />
          <Route path="/food/:id" element={<FoodDetail foods={foods} onDeleteFood={handleDeleteFood} />} />
          <Route path="/add" element={<AddFood onAddFood={handleAddFood} />} />
          <Route path="/edit/:id" element={<EditFood foods={foods} onUpdateFood={handleUpdateFood} />} />
          <Route path="/delete" element={<DeleteFoodList foods={foods} onDeleteFood={handleDeleteFood} />} />
          <Route path="/login" element={<Login />} /> {/* Sử dụng component Login */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
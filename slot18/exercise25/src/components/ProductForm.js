import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../actions';

const ProductForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        catalogs: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            price: parseFloat(formData.price),
            catalogs: formData.catalogs.split(',').map((cat) => cat.trim()),
        };
        dispatch(addProductAsync(newProduct));
        setFormData({
            id: '',
            name: '',
            price: '',
            description: '',
            catalogs: '',
        });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product ID</label>
                    <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Catalogs (comma-separated)</label>
                    <input
                        type="text"
                        className="form-control"
                        name="catalogs"
                        value={formData.catalogs}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
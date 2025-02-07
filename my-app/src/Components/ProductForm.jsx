import React, { useState } from 'react';
import { createProduct } from '../services/api';

const ProductForm = ({ onProductCreated }) => {
    const [formData, setFormData] = useState({ name: '', price: '', description: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(formData);
        onProductCreated();
        setFormData({ name: '', price: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <h2>Add New Product</h2>
            <input type="text" name="name" placeholder="Product Name" onChange={handleChange} value={formData.name} required />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} value={formData.price} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} required />
            <button type="submit" className="button">Add Product</button>
        </form>
    );
};

export default ProductForm;

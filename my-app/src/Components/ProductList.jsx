import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts, deleteProduct } from "../services/api";
import "../styles.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error loading products:", error);
            }
        };
        loadProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product._id} product={product} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default ProductList;
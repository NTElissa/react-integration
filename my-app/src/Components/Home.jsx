import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "../styles.css";

const Home = () => {
    return (
        <div className="container">
            <h1>Product Management</h1>
            <ProductForm onProductCreated={() => window.location.reload()} />
            <ProductList />
        </div>
    );
};

export default Home;
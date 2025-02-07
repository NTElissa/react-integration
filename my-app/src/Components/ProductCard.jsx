import React from "react";

const ProductCard = ({ product, onDelete }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => onDelete(product._id)}>Delete</button>
        </div>
    );
};

export default ProductCard;
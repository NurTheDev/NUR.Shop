import React from 'react';
import Category from "./Catagory.jsx";
import ProductCard from "./ProductCard.jsx";
import {getProducts} from "../Data/index.js";

const ProductList = () => {
    const products = getProducts();
    return (
        <div className="lg:col-span-2">
            <Category/>
            <div className="product-grid">
                {
                    products?.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;

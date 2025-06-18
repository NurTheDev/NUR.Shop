import React, {useContext} from 'react';
import Category from "./Catagory.jsx";
import ProductCard from "./ProductCard.jsx";
import {ProductContext} from "../context/index.js";
const ProductList = () => {
    const {productState} = useContext(ProductContext);
    const products = productState.products;
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

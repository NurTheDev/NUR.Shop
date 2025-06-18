import React, {useContext} from 'react';
import Category from "./Catagory.jsx";
import ProductCard from "./ProductCard.jsx";
import {ProductContext} from "../context/index.js";
import NoResult from "./NoResult.jsx";
const ProductList = () => {
    const {productState} = useContext(ProductContext);
    const products = productState.products;
    return (
        <div className="lg:col-span-2">
            <Category/>
            <div className="product-grid">
                {
                    products.length > 0 ? (
                        products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    ) : (
                    <NoResult/>
                    )
                }
            </div>
        </div>
    );
};

export default ProductList;

import React, {useContext} from 'react';
import {ProductContext} from "../context/index.js";

const Category = () => {
    const { productDispatch} = useContext(ProductContext);
    const handleCategoryChange = (event) => {
        productDispatch({
            type: 'FILTER_BY_CATEGORY',
            payload: event.target.value
        });
    };
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select onChange={(event) => handleCategoryChange(event)} className="border rounded-md px-2 py-1 text-sm">
                    <option value={"popular"}>Most Popular</option>
                    <option value={"newest"}>Newest</option>
                    <option value={"lowToHigh"}>Price: Low to High</option>
                    <option value={"highToLow"}>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default Category;

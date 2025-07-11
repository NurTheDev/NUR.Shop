
import {getImageUrl} from "../utility/index.js";
import {useContext} from "react";
import {CartContext} from "../context/index.js";
import Rating from "./Rating.jsx";

const ProductCard = ({product}) => {
    const {state, dispatch} = useContext(CartContext);
    const existingProduct = state.productItems.find(item => item.id === product.id);
    const isInCart = existingProduct ? true : false;
    const currentStock = existingProduct ? existingProduct.stock : product.stock;
    const handleAddToCart = (product) => {
        // Dispatch an action to add the product to the cart
        const existingProduct = state.productItems.find(item => item.id === product.id);
        if (!existingProduct) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    ...product,
                }
            })
        } else {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: {
                    ...product,
                }
            })
        }
    };
    return (
        <div
            className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={getImageUrl(product.image)} alt="Polo with Tipping Details"
                     className="h-full w-auto object-cover"/>
            </div>
            <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-1">
                        <Rating value={product.rating}/>
                        <span className="text-xs text-gray-500 ml-1">{product.rating}/5</span>
                    </div>
                    <span className="text-xs text-gray-700">({currentStock})</span>
                </div>
                <p className="font-bold">${product.price}</p>
                {isInCart ? (<button onClick={() => handleAddToCart(product)}
                    className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">Remove
                    from Cart</button>) : (<button onClick={() => handleAddToCart(product)}
                                                   disabled={currentStock === 0}
                                                   className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">Add
                    to Cart
                </button>)}

            </div>
        </div>
    );
};

export default ProductCard;

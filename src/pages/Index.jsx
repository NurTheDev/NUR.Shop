import React from 'react';
import Status from "../component/Status.jsx";
import Navbar from "../component/Navbar.jsx";
import Offer from "../component/Offer.jsx";
import Footer from "../component/Footer.jsx";
import ProductBoard from "../component/ProductBoard.jsx";
import ProductList from "../component/ProductList.jsx";
import CartBoard from "../component/CartBoard.jsx";

const Index = () => {
    return (
        <div className={"bg-white font-satoshi"}>
            <Status/>
            <Navbar/>
            <Offer/>
            <ProductBoard>
                <div className={"grid grid-cols-1 lg:grid-cols-3 gap-8"}>
                    <ProductList/>
                    <CartBoard/>
                </div>
            </ProductBoard>
            <Footer/>
        </div>
    );
};

export default Index;

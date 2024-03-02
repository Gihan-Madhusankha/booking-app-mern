// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from '../components/hero/Hero.jsx';
import Popular from "../components/popular/Popular.jsx";
import Offers from "../components/offer/Offers.jsx";
import NewCollection from "../components/newCollection/NewCollection.jsx";
import NewsLetter from "../components/newsLetter/NewsLetter.jsx";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    );
};

export default Shop;

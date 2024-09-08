import React, { useState } from 'react';
import SortingSidebar from './SortingSidebar';
import Product from './Product';

const ShopPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="shop-page">
            <div className="container">
                <div className="row">
                    <SortingSidebar onSelectCategory={setSelectedCategory} />
                </div>
                <div className="row">
                    <Product selectedCategory={selectedCategory} />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;

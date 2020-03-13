import React, { Component } from 'react';
import Phones from './phones';
import Laptops from './laptops';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Phones />
                <Laptops />
            </div>
        );
    };
};
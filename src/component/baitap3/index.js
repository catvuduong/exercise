import React, { Component } from 'react';
import Header from './header';
import Side from './slide';
import ProductList from './products-list';
import Footer from './footer';


export default class BaiTap3 extends Component {
    render() {
        return (<div>
            <Header />
            <Side />
            <ProductList />
            <Footer />
        </div>);
    };
};
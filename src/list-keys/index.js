import React, { Component } from 'react';

export default class ListKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSP: [
                { id: 1, tenSP: "Iphone", gia: 123 },
                { id: 2, tenSP: "Samsung", gia: 123 },
                { id: 3, tenSP: "HTC", gia: 123 },
            ],
        };
    };
    renderHTML = () => {
        let { mangSP } = this.state;
        return mangSP.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.tenSP}</td>
                    <td>{item.gia}</td>
                </tr>
            );
        });
    };
    render() {
        return (
            <div className="container">
                <h3 className="title">ListKeys</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>tenSP</th>
                            <th>gia</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderHTML()}</tbody>
                </table>
            </div>
        );
    }
};
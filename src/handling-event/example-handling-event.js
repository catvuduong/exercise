import React, { Component } from 'react';

export default class ExampleHandlingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Bee",
            isLogin: false,
        };
    };

    renderInfo = () => {
        // if (this.state.isLogin) {
        //     return <div>Hello {this.state.username}</div>
        // };
        // return <button className="btn btn-success" onClick={this.handlingLogin}>Login</button>

        return this.state.isLogin ? <div>Hello {this.state.username}</div> : <button className="btn btn-success" onClick={this.handlingLogin}>Login</button>;
    };

    handlingLogin = () => {
        this.setState({
            isLogin: true,
        });
    };

    render() {
        return (
            <div>
                <h3 className="title">Example Handling Event</h3>
                {this.renderInfo()}
            </div>
        );
    };
};
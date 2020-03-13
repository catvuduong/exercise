import React, { Component } from 'react';
import ClassProps from './classProps';
import FunctionProps from './functionProps';

export default class Props extends Component {
    name = "Bee";
    render() {
        return (
            <div>
                <ClassProps name={this.name} />
                <ClassProps name="ABC" />
                < FunctionProps username={this.name} />
            </div>
        );
    };
};

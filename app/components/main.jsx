'use strict';
import React     from 'react';
import {Marking} from './marking';

export class Main extends React.Component {
    render() {
        return (
            <div>
              <h1>{this.props.message}</h1>
              <Marking original={"This is a pen"} />
            </div>
        );
    }
}

'use strict';
import React from 'react';

export class Marking extends React.Component {
    render() {
        return (
            <div>
              <textarea>{this.props.original}</textarea>
            </div>
        );
    }
}

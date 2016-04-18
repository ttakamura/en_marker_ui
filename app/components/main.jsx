'use strict';

import React from 'react';

export class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      message: `Hello This is ReactComponent!! 1 ${Date()}`
    };
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <h1>{this.state.message}</h1>
        </div>
      </div>
    );
  }
}

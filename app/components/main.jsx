'use strict';

import React from 'react';

export class Main extends React.Component {
  render() {
    return (
        <div>
          <h1>{this.props.message}</h1>
        </div>
    );
  }
}

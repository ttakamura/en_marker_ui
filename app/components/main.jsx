'use strict';

import React from 'react';

export class Main extends React.Component {
  render() {
    return (
        <div>
          <div>{this.props.message}</div>
        </div>
    );
  }
}

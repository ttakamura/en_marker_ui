'use strict';
import React  from 'react';
import styles from './marking.scss';

export class Marking extends React.Component {
  render() {
    return (
      <div className={styles.originalText}>
        <textarea value={this.props.original} />
        <hr />
        <pre>{this.props.original}</pre>
      </div>
    );
  }
}

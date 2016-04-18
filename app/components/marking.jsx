'use strict';
import React  from 'react';
import styles from './marking.scss';

export class Marking extends React.Component {
    render() {
        return (
            <div className={styles.originalText}>
              <textarea>{this.props.original}</textarea>
            </div>
        );
    }
}

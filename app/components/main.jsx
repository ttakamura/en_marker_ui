'use strict';
import React     from 'react';
import {Marking} from './marking';
import styles    from './main.scss';

export class Main extends React.Component {
    render() {
        return (
            <div className={styles.mainApp}>
              <h1>{this.props.message}</h1>
              <Marking original={"This is a pen"} />
            </div>
        );
    }
}

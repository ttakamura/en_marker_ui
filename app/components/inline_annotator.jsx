import React             from 'react';
import { Token }         from '../models/sentence';
import styles            from './inline_annotator.scss';

export default class InlineAnnotator extends React.Component {
  render() {
    return (
      <div className={styles.inlineAnnotator}>
        {this.props.sentence.tokens.map((token) => (
          <span className={styles.token} key={token.id}>{token.word}</span>
        ))}
      </div>
    );
  }
}

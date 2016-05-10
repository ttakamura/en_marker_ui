import React              from 'react';
import Paper              from 'material-ui/Paper';
import { Token }          from '../models/sentence';
import styles             from './inline_annotator.scss';
import TableAnnotator     from './table_annotator';
import { List }           from 'immutable';

class Selector extends React.Component {
  render() {
    const token  = this.props.token;
    const tokens = new List([ token ]);
    if (token) {
      return (
        <div>
          <TableAnnotator tokens={tokens}
                          onCheck={this.props.onCheck} />
        </div>
      );
    }
    return <div />;
  }
}

export default class InlineAnnotator extends React.Component {
  constructor(props) {
    super(props);
    this.showSelector = this.showSelector.bind(this);
    this.state        = { selectedToken: null };
  }
  showSelector(token) {
    this.setState({ selectedToken: token });
  }
  render() {
    return (
      <Paper className={styles.inlineAnnotator}>
        <Selector token={this.state.selectedToken}
                  onCheck={this.props.onCheck} />
        <div className={styles.tokens}>
          {this.props.sentence.tokens.map((token) => (
            <ruby className={`${styles.token} ${token.annotationKeysAsCssClass()}`}
                  key={token.id}
                  onClick={() => this.showSelector(token)}>
              <rt>{token.annotationKeys().join(', ')}</rt>
              <rb>{token.word}</rb>
            </ruby>
          ))}
        </div>
      </Paper>
    );
  }
}

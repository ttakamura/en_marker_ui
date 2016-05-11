import React              from 'react';
import Paper              from 'material-ui/Paper';
import { Token }          from '../models/sentence';
import styles             from './inline_annotator.scss';
import TableAnnotator     from './table_annotator';
import { List }           from 'immutable';

class Selector extends React.Component {
  render() {
    if (this.props.tokens) {
      return (
        <div>
          <TableAnnotator tokens={this.props.tokens}
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
    this.showOneSelector   = this.showOneSelector.bind(this);
    this.showMultiSelector = this.showMultiSelector.bind(this);
    this.state = { selectedTokens: null };
  }
  showOneSelector(token) {
    const tokens = new List([token]);
    this.setState({ selectedTokens: tokens });
  }
  showMultiSelector(e) {
    const selection = window.getSelection();
    if (selection.anchorNode !== selection.focusNode) {
      e.stopPropagation();
      const tokens = new List(this.getTokensByWindowSelection(selection));
      this.setState({ selectedTokens: tokens });
    }
  }
  getTokensByWindowSelection(selection) {
    const selectedTokens = [];
    Array.from(this.refs.tokensContainer.children).forEach((tokenEl) => {
      if (selection.containsNode(tokenEl) || selection.anchorNode === tokenEl || selection.focusNode === tokenEl) {
        const id = tokenEl.dataset.id;
        const token = this.props.sentence.tokens.find((t) => t.id === id);
        selectedTokens.push(token);
      }
    });
    return selectedTokens;
  }
  render() {
    return (
      <Paper className={styles.inlineAnnotator}>
        <Selector tokens={this.state.selectedTokens}
                  onCheck={this.props.onCheck} />
        <div className={styles.tokens}
             onMouseUp={this.showMultiSelector}
             ref="tokensContainer" >
          <span>"</span>
          {this.props.sentence.tokens.map((token) => (
            <ruby className={`${styles.token} ${token.annotationKeysAsCssClass()}`}
                  key={token.id}
                  data-id={token.id}
                  onClick={() => this.showOneSelector(token)}>
              <rt>{token.annotationKeys().join(', ')}</rt>
              <rb>{token.word}</rb>
            </ruby>
          ))}
          <span>"</span>
        </div>
      </Paper>
    );
  }
}

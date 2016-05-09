import React             from 'react';
import { Token }         from '../models/sentence';
import styles            from './inline_annotator.scss';

class Selector extends React.Component {
  render() {
    const token = this.props.token;
    if (token) {
      return (
        <div>
          <h2>Selector for '{token.word}'</h2>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default class InlineAnnotator extends React.Component {
  constructor(props) {
    super(props);
    this.showSelector = this.showSelector.bind(this);
    this.state        = { selectedToken: null };
  }
  showSelector(token) {
    console.log(token.word);
    this.setState({ selectedToken: token });
  }
  render() {
    console.log(this.state.selectedToken);
    return (
      <div className={styles.inlineAnnotator}>
        <Selector token={this.state.selectedToken} />
        <div>
          {this.props.sentence.tokens.map((token) => (
            <span className={styles.token}
                  key={token.id}
                  onClick={() => this.showSelector(token)}>
              {token.word}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

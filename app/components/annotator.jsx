import React        from 'react';

export default class Annotator extends React.Component {
  render() {
    return (
      <section>{this.props.sentence.tokens.map((token) => (
        <div key={token.id}>
          <span className="text">{token.word}</span>
        </div>
      ))}
      </section>
    );
  }
}

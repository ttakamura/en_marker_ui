import React        from 'react';

export default class Annotator extends React.Component {
  tokens() {
    const tokens = this.props.original.split(' ');
    return tokens;
  }
  render() {
    return (
      <section>{this.tokens().map((token) => (
        <div>
          <span className="text">{token}</span>
        </div>
      ))}
      </section>
    );
  }
}

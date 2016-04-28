import React        from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField    from 'material-ui/TextField';
import styles       from './original_text_area.scss';

export default class OriginalTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.propsToState(props);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(this.propsToState(nextProps));
  }
  propsToState(props) {
    return { text: props.original };
  }
  render() {
    const self = this;
    return (
      <section className={styles.originalText}>
        <div>
          <TextField className={styles.originalTextInput}
                     id="originalTextInput"
                     ref="originalTextInput"
                     multiLine
                     rows={4}
                     value={self.state.text}
                     style={{
                       width: '100%',
                     }}
                     onChange={(e) => {
                       self.setState({ text: e.target.value });
                     }}
                     />
        </div>
        <div>
          <RaisedButton label="Save"
                        onClick={() => {
                          self.props.onSave(self.refs.originalTextInput.getValue());
                        }}
            />
        </div>
      </section>
    );
  }
}

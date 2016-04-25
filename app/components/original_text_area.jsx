import React        from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField    from 'material-ui/TextField';
import styles       from './original_text_area.scss';

export default class OriginalTextArea extends React.Component {
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
                     defaultValue={self.props.original}
                     style={{ width: '100%' }}
                     />
        </div>
        <div>
          <RaisedButton label="Save"
                        onClick={() => {
                          self.props.onSave(self.refs.originalTextInput.getValue());
                        }}
            />
        </div>
        <pre>{self.props.original}</pre>
      </section>
    );
  }
}

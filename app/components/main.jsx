import React            from 'react';
import AppBar           from 'material-ui/AppBar';
import OriginalTextArea from './original_text_area';
import Annotator        from './annotator';
import styles           from './main.scss';

export class Main extends React.Component {
  render() {
    return (
      <div className={styles.mainApp}>
        <AppBar
           title={this.props.message}
           />
        <OriginalTextArea
           original={this.props.originalText}
           onSave={this.props.updateOriginalText}
           />
        <hr />
        <Annotator
           original={this.props.originalText}
           />
      </div>
    );
  }
}

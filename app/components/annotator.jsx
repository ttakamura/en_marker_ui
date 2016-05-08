import React             from 'react';
import RaisedButton      from 'material-ui/RaisedButton';
import Snackbar          from 'material-ui/Snackbar';
import styles            from './annotator.scss';
import TableAnnotator    from './table_annotator';

export default class Annotator extends React.Component {
  render() {
    return (
      <div>
        <TableAnnotator sentence={this.props.sentence}
                        onCheck={this.props.onCheck} />

        <div className={styles.exportSection}>
          <RaisedButton label="Export" onClick={() => this.props.onExport(this.props.sentence)} />
        </div>

        <Snackbar open={this.props.showExportedMessage}
                  message="Exported the text to the file!!"
                  autoHideDuration={4000}
                  onRequestClose={this.props.onCloseExportedMessage}
        />
      </div>
    );
  }
}

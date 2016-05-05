import React             from 'react';
import Table             from 'material-ui/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow          from 'material-ui/Table/TableRow';
import TableHeader       from 'material-ui/Table/TableHeader';
import TableRowColumn    from 'material-ui/Table/TableRowColumn';
import TableBody         from 'material-ui/Table/TableBody';
import Checkbox          from 'material-ui/Checkbox';
import RaisedButton      from 'material-ui/RaisedButton';
import Snackbar          from 'material-ui/Snackbar';
import { Token }         from '../models/sentence';
import styles            from './annotator.scss';

class AnnotatorColumn extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const annot = this.props.annot;
    const token = this.props.token;
    return (
      <TableRowColumn>
        <Checkbox defaultChecked={annot.checked}
                  onCheck={(e, flag) => this.props.onCheck(annot, flag, token)} />
      </TableRowColumn>
    );
  }
}

class AnnotatorRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.token !== nextProps.token;
  }
  render() {
    const token = this.props.token;
    return (
      <TableRow>
        <TableRowColumn>
          {token.word}
        </TableRowColumn>
        {token.allAnnotations().map((annot) => (
          <AnnotatorColumn key={`${token.id}-${annot.key}`}
                           token={token}
                           annot={annot}
                           onCheck={this.props.onCheck} />
        ))}
      </TableRow>
    );
  }
}

class AnnotatorTable extends React.Component {
  render() {
    return (
      <Table className={styles.table}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>
              Word
            </TableHeaderColumn>
            {Token.allAnnotations().map((annot) => (
              <TableHeaderColumn key={annot.key}>
                {annot.key}
              </TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.sentence.tokens.map((token) => (
            <AnnotatorRow key={token.id}
                          token={token}
                          onCheck={this.props.onCheck} />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default class Annotator extends React.Component {
  render() {
    return (
      <div>
        <AnnotatorTable sentence={this.props.sentence}
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

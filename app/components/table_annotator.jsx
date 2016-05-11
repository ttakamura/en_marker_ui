import React             from 'react';
import Table             from 'material-ui/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow          from 'material-ui/Table/TableRow';
import TableHeader       from 'material-ui/Table/TableHeader';
import TableRowColumn    from 'material-ui/Table/TableRowColumn';
import TableBody         from 'material-ui/Table/TableBody';
import Checkbox          from 'material-ui/Checkbox';
import { Token }         from '../models/sentence';
import styles            from './table_annotator.scss';

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
                  onCheck={(e, flag) => {
                    this.props.onCheck(annot, flag, token);
                  }} />
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
        <TableRowColumn style={{ width: '80px' }}>
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

class AllAnnotatorRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tokens !== nextProps.tokens;
  }
  render() {
    const tokens = this.props.tokens;
    return (
      <TableRow style={{ backgroundColor: "rgb(240, 240, 250)",  fontWeight: 'bold' }}>
        <TableRowColumn style={{ width: '80px' }}>[ALL]</TableRowColumn>
        {Token.allAnnotations().map((annot) => (
          <TableRowColumn key={annot.key}>
            <Checkbox defaultChecked={false}
                      key={tokens.map((t) => t.id).join(",")}
                      onCheck={(e, flag) => this.props.onCheckAll(annot, flag, tokens)} />
          </TableRowColumn>
        ))}
      </TableRow>
    );
  }
}

export default class TableAnnotator extends React.Component {
  render() {
    // fixedHeader
    // height={'400px'} >
    return (
      <Table className={styles.table}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{ width: '80px' }}>
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
          <AllAnnotatorRow tokens={this.props.tokens}
                           onCheckAll={this.props.onCheckAll} />
          {this.props.tokens.map((token) => (
            <AnnotatorRow key={token.id}
                          token={token}
                          onCheck={this.props.onCheck} />
          ))}
        </TableBody>
      </Table>
    );
  }
}

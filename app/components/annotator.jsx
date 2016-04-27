import React             from 'react';
import Table             from 'material-ui/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow          from 'material-ui/Table/TableRow';
import TableHeader       from 'material-ui/Table/TableHeader';
import TableRowColumn    from 'material-ui/Table/TableRowColumn';
import TableBody         from 'material-ui/Table/TableBody';
import Checkbox          from 'material-ui/Checkbox';
import { Token }         from '../models/sentence';

export default class Annotator extends React.Component {
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>
              Word
            </TableHeaderColumn>
            {Token.allAnnotations().map((annot, key) => (
              <TableHeaderColumn>
                {annot.key}
              </TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {this.props.sentence.tokens.map((token) => (
          <TableRow key={token.id}>
            <TableRowColumn>
              {token.word}
            </TableRowColumn>
            {token.allAnnotations().map((annot, key) => (
              <TableRowColumn>
                <Checkbox />
              </TableRowColumn>
            ))}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    );
  }
}

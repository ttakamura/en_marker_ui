import React              from 'react';
import Paper              from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import styles             from './sentence_list.scss';

export default class SentenceList extends React.Component {
  render() {
    return (
      <Paper className={styles.sentenceList}>
        <List>
          {this.props.sentences.map((s) => (
            <ListItem key={s.id}
                      primaryText={s.source}
                      onTouchTap={(e) => this.props.onClick(s)}
                      />
          ))}
        </List>
      </Paper>
    );
  }
}

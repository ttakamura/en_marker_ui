import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';

import Main             from './containers/main';
import DevTools         from './containers/DevTools';
import * as actions     from './actions';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Main />
            <DevTools />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

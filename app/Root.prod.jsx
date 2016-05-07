import React            from 'react';
import { Provider }     from 'react-redux';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main             from './containers/main';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Main />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

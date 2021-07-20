nimport React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import CoinListScreen from './screens/CoinScreen';
import CoinDetailScreen from './screens/CoinDetailScreen';
import store from './store/store';
import { MuiThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import indigo from '@material-ui/core/colors/indigo';
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
  }
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme} >
      <div className="app-container">
      <AppBar position="fixed">
        <Toolbar data-test="toolbar" id="toolbar">AIB</Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/" component={CoinListScreen} />
          <Route path="/details" component={CoinDetailScreen} />
        </Switch>
      </Router>
      </div>
    </MuiThemeProvider>
  </Provider>
)
export default App;

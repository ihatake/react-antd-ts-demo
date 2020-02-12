import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import './App.css';
import { mainRouter } from './routes';
import { AuthCheck } from './components';
// #region types
type Props = any;
type State = any;
// #endregion
console.log(mainRouter);
class App extends Component<Props, State> {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {mainRouter.map(route => {
              return (
                <Route
                  path={route.pathname}
                  component={(routerProps: any) => {
                    console.log(routerProps);
                    if (route.auth) {
                      return (
                        <AuthCheck>
                          <route.component />
                        </AuthCheck>
                      );
                    }
                    return <route.component {...routerProps} />;
                  }}
                  key={route.pathname}
                />
              );
            })}
            <Redirect to='/home' from='/' exact />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

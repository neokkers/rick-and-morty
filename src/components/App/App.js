import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Tabs from '../Tabs/Tabs';
import ItemsPage from '../ItemsPage/ItemsPage';
import ItemPage from '../ItemPage/ItemPage';
import './App.css';

class App extends Component {
  state = {
    currentTab: null,
  };

  setCurrentTab = currentTab => this.setState({ currentTab });

  render() {
    const { currentTab } = this.state;
    return (
      <div className="App">
        <AppHeader title="RickAndMorty" />
        <Tabs currentTab={currentTab} />
        <Switch>
          <Route
            path="/items/:itemType/page-:pageNumber"
            exact
            render={props => (
              <ItemsPage {...props} setCurrentTab={this.setCurrentTab} />
            )}
          />
          <Route
            path="/items/:itemType/id-:itemId"
            exact
            render={props => <ItemPage {...props} />}
          />
          <Redirect from="/" exact to="/items/characters/page-1" />
          <Redirect
            from="/items/:itemType"
            exact
            to="/items/:itemType/page-1"
          />
        </Switch>
      </div>
    );
  }
}

export default App;

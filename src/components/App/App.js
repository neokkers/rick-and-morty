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
    data: {
      characters: {},
      locations: {},
      episodes: {},
    },
  };

  setCurrentTab = currentTab => this.setState({ currentTab });

  setData = (itemType, dataFromApi) => {
    const { data } = this.state;
    const newData = { ...data };
    newData[itemType] = dataFromApi;
    this.setState({ data: newData });
  };

  render() {
    const { currentTab, data } = this.state;
    return (
      <div className="App">
        <AppHeader title="RickAndMorty" />
        <Tabs currentTab={currentTab} />
        <Switch>
          <Route
            path="/items/:itemType/page-:pageNumber"
            exact
            render={props => (
              <ItemsPage
                {...props}
                setCurrentTab={this.setCurrentTab}
                setData={this.setData}
                data={data[props.match.params.itemType]}
              />
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

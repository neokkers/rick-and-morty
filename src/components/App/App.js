import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Tabs from '../Tabs/Tabs';
import ItemsPage from '../ItemsPage/ItemsPage';
import ItemPage from '../ItemPage/ItemPage';
import './App.css';
/* TODO: add proptypes */

class App extends Component {
  state = {
    currentTab: null,
    data: {
      characters: {},
      locations: {},
      episodes: {},
    },
    currentPage: {
      characters: 1,
      locations: 1,
      episodes: 1,
    },
  };

  setCurrentTab = currentTab => this.setState({ currentTab });

  setData = (itemType, dataFromApi, pageNumber) => {
    const { data, currentPage } = this.state;
    const newData = { ...data };
    const newCurrentPage = { ...currentPage };
    newData[itemType] = dataFromApi;
    newCurrentPage[itemType] = pageNumber;
    this.setState({ data: newData, currentPage: newCurrentPage });
  };

  render() {
    const { currentTab, data, currentPage } = this.state;
    return (
      <div className="App">
        <AppHeader title="RickAndMorty" />
        <Tabs currentTab={currentTab} currentPage={currentPage} />
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
                currentPage={currentPage[props.match.params.itemType]}
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

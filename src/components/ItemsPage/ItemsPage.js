import React, { Component } from 'react';
import { getItemsByPage } from '../../services/apiService';

export default class ItemsPage extends Component {
  async componentDidMount() {
    this.updateCurrentTab();
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } } } = this.props;
    const res = await getItemsByPage(itemType.slice(0, -1), pageNumber);
    this.setState({ items: res.data.results });
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (prevProps.match.params.itemType !== this.props.match.params.itemType) {
      this.updateCurrentTab();
    }
  }

  updateCurrentTab = () => {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType } }, setCurrentTab } = this.props;
    setCurrentTab(itemType);
  };

  render() {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType } } } = this.props;
    return <div>Items page {itemType}</div>;
  }
}

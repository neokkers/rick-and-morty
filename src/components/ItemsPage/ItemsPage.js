import React, { Component } from 'react';
import { getItemsByPage } from '../../services/apiService';
import Pagination from './Pagination';
import ItemSet from './ItemSet';

export default class ItemsPage extends Component {
  async componentDidMount() {
    this.updateCurrentTab();
    this.getAndSetData('mount'); // method without updating data (for safety when route changes)
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } } } = this.props;
    if (prevProps.match.params.itemType !== itemType) {
      this.updateCurrentTab();
    }
    if (
      prevProps.match.params.pageNumber !== pageNumber ||
      prevProps.match.params.itemType !== itemType
    ) {
      this.getAndSetData();
    }
  }

  updateCurrentTab = () => {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType } }, setCurrentTab } = this.props;
    setCurrentTab(itemType);
  };

  getAndSetData = async type => {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } }, setData, data } = this.props;
    if (type === 'mount' && data.results) return;
    const res = await getItemsByPage(itemType.slice(0, -1), pageNumber);
    setData(itemType, res.data, pageNumber);
  };

  render() {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } }, data } = this.props;
    if (!data || !data.info) return null;

    return (
      <div style={{ marginTop: '20px' }}>
        <Pagination
          itemType={itemType}
          pageCount={data.info.pages}
          pageNumber={pageNumber}
        />
        <ItemSet items={data.results} />
      </div>
    );
  }
}

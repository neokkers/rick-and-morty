import React, { Component } from 'react';
import { getItemsByPage } from '../../services/apiService';
import Pagination from './Pagination';
import ItemSet from './ItemSet';

export default class ItemsPage extends Component {
  async componentDidMount() {
    this.updateCurrentTab();
    this.getData();
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } } } = this.props;
    if (prevProps.match.params.itemType !== itemType) {
      this.updateCurrentTab();
    }
    if (prevProps.match.params.pageNumber !== pageNumber) {
      this.getData();
    }
  }

  updateCurrentTab = () => {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType } }, setCurrentTab } = this.props;
    setCurrentTab(itemType);
  };

  getData = async () => {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } }, setData } = this.props;
    const res = await getItemsByPage(itemType.slice(0, -1), pageNumber);
    setData(itemType, res.data);
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

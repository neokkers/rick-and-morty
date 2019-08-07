import React, { Component } from 'react';
import { getItemsByPage } from '../../services/apiService';
import Pagination from './Pagination';
import ItemSet from './ItemSet';
import Loader from '../Loader/Loader';

export default class ItemsPage extends Component {
  state = {
    loading: false,
  };

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
    await this.setState({ loading: true });
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } }, setData, data } = this.props;
    if (type === 'mount' && data.results) return;
    const res = await getItemsByPage(itemType.slice(0, -1), pageNumber);
    await setData(itemType, res.data, pageNumber);
    this.setState({ loading: false });
  };

  render() {
    // eslint-disable-next-line prettier/prettier
    const { match: { params: { itemType, pageNumber } }, data } = this.props;
    const { loading } = this.state;
    if (!data || !data.info) return <Loader />;

    return (
      <div style={{ marginTop: '20px' }}>
        <Pagination
          itemType={itemType}
          pageCount={data.info.pages}
          pageNumber={pageNumber}
        />
        <ItemSet items={data.results} loading={loading} />
      </div>
    );
  }
}

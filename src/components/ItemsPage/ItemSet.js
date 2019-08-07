import React from 'react';
import ItemCard from './ItemCard';
import Loader from '../Loader/Loader';

const ItemSet = ({ items, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridGap: '20px',
        width: '1300px',
        margin: '0 auto',
        padding: '30px 0',
      }}
    >
      {items.map(el => (
        <ItemCard key={el.id} item={el} />
      ))}
    </div>
  );

export default ItemSet;

import React from 'react';
import './itemCard.scss';

const ItemCard = ({ item }) => (
  <div
    className={`item-card ${item.status ? item.status.toLowerCase() : null}`}
  >
    <div
      className="img"
      style={{ backgroundImage: `url(${item.image})` }}
    ></div>
    <div className="name">{item.name}</div>
    <div className="gender">{item.gender}</div>
    <div className="species">{item.species}</div>
    <div className="status">{item.status}</div>
  </div>
);

export default ItemCard;

import React from 'react';
import { Link } from 'react-router-dom';
import './tabs.scss';

const setClass = (type, currentTab) =>
  type === currentTab ? 'item selected' : 'item';

const Tabs = ({ currentTab }) => (
  <div className="tabs">
    <Link to="/items/characters" className={setClass('characters', currentTab)}>
      Characters
    </Link>
    <Link to="/items/locations" className={setClass('locations', currentTab)}>
      Locations
    </Link>
    <Link to="/items/episodes" className={setClass('episodes', currentTab)}>
      Episodes
    </Link>
  </div>
);

export default Tabs;

import React from 'react';
import { Link } from 'react-router-dom';
import './tabs.scss';

const setClass = (type, currentTab) =>
  type === currentTab ? 'item selected' : 'item';

const Tabs = ({ currentTab, currentPage }) => (
  <div className="tabs">
    <Link
      to={`/items/characters/page-${currentPage.characters}`}
      className={setClass('characters', currentTab)}
    >
      Characters
    </Link>
    <Link
      to={`/items/locations/page-${currentPage.locations}`}
      className={setClass('locations', currentTab)}
    >
      Locations
    </Link>
    <Link
      to={`/items/episodes/page-${currentPage.episodes}`}
      className={setClass('episodes', currentTab)}
    >
      Episodes
    </Link>
  </div>
);

export default Tabs;

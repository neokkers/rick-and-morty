import React from 'react';

const AppHeader = ({ title }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 0',
      fontSize: 40,
      fontWeight: 'bold',
    }}
  >
    {title}
  </div>
);

export default AppHeader;

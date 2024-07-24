import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>PH Barber Shop</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'var(--british-racing-green)',
    padding: '1rem',
    textAlign: 'center',
    color: 'white',
  },
};

export default Header;

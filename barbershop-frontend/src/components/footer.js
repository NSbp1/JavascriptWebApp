import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Barber Shop. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--british-racing-green)',
    padding: '1rem',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
};

export default Footer;

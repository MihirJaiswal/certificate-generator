import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Mihir Jaiswal ${year}`}</footer>;
};

export default Footer;
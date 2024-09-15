import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-2 text-center text-xs border-t border-gray-500">
      {`Copyright © Mihir Jaiswal ${year}`}
    </footer>
  );
};

export default Footer;

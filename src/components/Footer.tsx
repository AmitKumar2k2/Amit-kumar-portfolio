import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span>Designed & Built by</span>
          <span className="text-orange-400 font-semibold">Amit Kumar</span>
          <span className="text-orange-400">✦</span>
          <span>2025</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          Made with passion and modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
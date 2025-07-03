import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-110"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;

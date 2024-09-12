import React from 'react';

const PrimaryButton = ({ text }) => {
  return (
    <button className="bg-white text-blue-600 py-3 px-6 rounded-md shadow-md hover:bg-gray-200">
      {text}
    </button>
  );
};

export default PrimaryButton;

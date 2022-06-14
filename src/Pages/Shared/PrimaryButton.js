import React from 'react';

const PrimaryButton = ({children}) => {
  return (
    <button className="bg-gradient-to-r from-secondary to-primary font-bold text-white	btn btn-primary">
          {children}
    </button>
  );
};

export default PrimaryButton;
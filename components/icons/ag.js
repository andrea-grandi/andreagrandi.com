import React from 'react';

const CustomLogo = (props) => {
  return ( 
    <svg
      width={30}
      height={30}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    >
      {/* Iniziali "A" e "G" */}
      <text x="0" y="35" fontSize="30" fontWeight="bold" fill="currentColor">
        A
      </text>
      <text x="15" y="35" fontSize="30" fontWeight="bold" fill="currentColor">
        G
      </text>
    </svg>
  );
};

export default CustomLogo;

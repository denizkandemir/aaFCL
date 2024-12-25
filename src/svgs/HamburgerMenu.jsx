import React from 'react';

const HamburgerMenu = ({fill = "black"}) => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Menu</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Menu">
          <line
            x1="5"
            y1="7"
            x2="19"
            y2="7"
            id="Path"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="5"
            y1="17"
            x2="19"
            y2="17"
            id="Path"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            id="Path"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default HamburgerMenu;

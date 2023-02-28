import React from 'react';

const IconeRefreshTable = ({ setTableStatus }) => {
  const cleanBoard = () => {
    setTableStatus([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
      onClick={cleanBoard}
    >
      <g clipPath='url(#clip0_20_3)'>
        <path
          d='M23.5333 8.46668C21.6 6.53334 18.9467 5.33334 16 5.33334C10.1067 5.33334 5.34668 10.1067 5.34668 16C5.34668 21.8933 10.1067 26.6667 16 26.6667C20.9733 26.6667 25.12 23.2667 26.3067 18.6667H23.5333C22.44 21.7733 19.48 24 16 24C11.5867 24 8.00001 20.4133 8.00001 16C8.00001 11.5867 11.5867 8.00001 16 8.00001C18.2133 8.00001 20.1867 8.92001 21.6267 10.3733L17.3333 14.6667H26.6667V5.33334L23.5333 8.46668Z'
          fill='#D6D6D6'
        />
      </g>
      <defs>
        <clipPath id='clip0_20_3'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconeRefreshTable;

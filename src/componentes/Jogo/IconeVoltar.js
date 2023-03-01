import React from 'react';
import { useNavigate } from 'react-router-dom';

const IconeVoltar = () => {
  const navigate = useNavigate();

  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
      onClick={() => navigate('/')}
    >
      <g clipPath='url(#clip0_2_297)'>
        <path
          d='M26.6667 14.6667H10.44L17.8933 7.21334L16 5.33334L5.33333 16L16 26.6667L17.88 24.7867L10.44 17.3333H26.6667V14.6667Z'
          fill='#D6D6D6'
        />
      </g>
      <defs>
        <clipPath id='clip0_2_297'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconeVoltar;

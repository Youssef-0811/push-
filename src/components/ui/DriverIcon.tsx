import React from 'react';

const DriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ size = 36, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 125" style={{ enableBackground: 'new 0 0 100 100', width: size, height: size }} {...props}>
      <g>
        <circle cx="41.2" cy="24.4" r="14.4" />
        <path d="M62.3,47.8c-11.7,0-21.1,9.5-21.1,21.1S50.7,90,62.3,90s21.1-9.5,21.1-21.1S74,47.8,62.3,47.8z M47.2,59.9   c0.7-1.2,1.6-2.4,2.7-3.4c4.1-4.1,9.8-5.9,15.7-4.9c2.3,0.4,4.5,1.3,6.4,2.6c2.3,1.5,4.1,3.5,5.4,5.7c0.4,0.7,0.2,1.7-0.6,2.1   l-0.7,0.3c-3.5,1.6-7.5,1.6-11,0.1c-0.8-0.4-1.8-0.6-2.8-0.6c-1,0-1.9,0.2-2.8,0.6c-3.5,1.5-7.5,1.5-11-0.1L47.8,62   C47.1,61.6,46.8,60.6,47.2,59.9z M59.7,82.9l-0.2,1.7c-0.1,0.9-1,1.5-1.8,1.3c-2.9-0.8-5.7-2.3-7.9-4.5c-3.3-3.3-5.2-7.7-5.2-12.4   c0,0,0,0,0,0c0-1,1-1.7,1.9-1.4l2.9,0.8c2.9,0.8,5.5,2.5,7.3,4.9c0,0,0.1,0.1,0.1,0.1C58.9,76,60,79.4,59.7,82.9z M62.5,72.4   c-2.1,0.1-3.8-1.6-3.7-3.7c0.1-1.8,1.5-3.2,3.3-3.3c2.1-0.1,3.8,1.6,3.7,3.7C65.8,70.9,64.3,72.3,62.5,72.4z M74.7,81.3   c-2.2,2.2-4.9,3.8-7.8,4.5c-0.9,0.2-1.7-0.4-1.8-1.3l-0.1-1.7c-0.3-3.5,0.8-6.9,2.9-9.6c0,0,0.1-0.1,0.1-0.1   c1.8-2.4,4.4-4.1,7.3-4.9l2.8-0.8c0.9-0.2,1.8,0.4,1.8,1.4c0,0,0,0,0,0C79.9,73.6,78.1,78,74.7,81.3z" />
        <path d="M61.9,46.4c-2.4-3.9-5.8-7.1-9.9-9.1c-2.9,2.5-6.7,4-10.8,4c-4.1,0-7.9-1.5-10.8-3.9c-7.9,4.1-13.4,12.3-13.8,22   c0,0,0,8.1,0,8.2c0,3.3,10.6,6,23.7,6.1c-0.3-1.5-0.5-3.1-0.5-4.7C39.8,56.6,49.7,46.6,61.9,46.4z" />
      </g>
    </svg>
  );
};

export default DriverIcon;
import React, { useEffect } from 'react';

const Sharingan = () => {
  useEffect(() => {
    const svg = document.getElementById('sharingan');
    const animation = document.getElementById('rotateAnimation');

    const handleMouseOver = () => {
      animation.setAttribute('dur', '0.9s');
    };

    const handleMouseOut = () => {
      animation.setAttribute('dur', '4s');
    };

    svg.addEventListener('mouseover', handleMouseOver);
    svg.addEventListener('mouseout', handleMouseOut);

    // Cleanup listeners on component unmount
    return () => {
      svg.removeEventListener('mouseover', handleMouseOver);
      svg.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="sharingan"
      width="75"
      height="75"
      viewBox="0 0 300 300"
    >
      <defs>
        <radialGradient id="gr">
          <stop offset="0" style={{ stopColor: '#660000', stopOpacity: 1 }} />
          <stop offset="0.6" style={{ stopColor: '#c30000', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#a00000', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <g id="animationGroup">
        <circle
          style={{ fill: 'url(#gr)', stroke: '#000', strokeWidth: 10 }}
          cx="150"
          cy="150"
          r="145"
        />
        <circle
          style={{ fill: 'none', stroke: '#000000', strokeWidth: 4, strokeOpacity: 0.3 }}
          cx="150"
          cy="150"
          r="90"
        />
        <g id="tomoe1">
          <circle style={{ fill: '#000' }} cx="60" cy="150" r="20" />
          <path
            style={{ fill: '#000' }}
            d="M 60,170 59.4,152.9 C 43.9,152.9 28.7,154.1 18.8,133.3 22.4,156 32.8,170 60,170 z"
          />
        </g>
        <use href="#tomoe1" transform="rotate(120 150 150)" />
        <use href="#tomoe1" transform="rotate(-120 150 150)" />
        <circle style={{ fill: '#000' }} cx="150" cy="150" r="25" />
        <animateTransform
          id="rotateAnimation"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 150 150"
          to="360 150 150"
          dur="2s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default Sharingan;

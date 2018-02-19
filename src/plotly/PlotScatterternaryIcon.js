import React from 'react';
const PlotScatterternaryIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M30.375 28.688h-28.75l14.375-27.5zM3.75 27.313h24.375l-12.125-23.188zM18.688 16c0 0.75-0.625 1.313-1.375 1.313-0.688 0-1.313-0.563-1.313-1.313s0.625-1.313 1.313-1.313c0.75 0 1.375 0.563 1.375 1.313zM21.313 20c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM9.313 24c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM17.313 12c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM13.313 20c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM13.313 25.313c0 0.75-0.563 1.375-1.313 1.375s-1.313-0.625-1.313-1.375c0-0.688 0.563-1.313 1.313-1.313s1.313 0.625 1.313 1.313zM24 24c0 0.75-0.625 1.313-1.313 1.313-0.75 0-1.375-0.563-1.375-1.313s0.625-1.313 1.375-1.313c0.688 0 1.313 0.563 1.313 1.313z" />
    </svg>
  );
};
export default PlotScatterternaryIcon;

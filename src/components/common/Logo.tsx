
import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="150"
    height="36"
    viewBox="0 0 150 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="28"
      fontFamily="Inter, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-foreground"
    >
      Praverse
      <tspan className="fill-secondary">AI</tspan>
    </text>
  </svg>
);

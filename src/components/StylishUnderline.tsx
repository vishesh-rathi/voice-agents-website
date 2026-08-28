import React from 'react';

interface StylishUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const StylishUnderline: React.FC<StylishUnderlineProps> = ({
  children,
  className = '',
  color = 'text-primary',
}) => {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className={`absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-2.5 sm:h-3.5 ${color} pointer-events-none`}
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 8.5C35 2.5 85 2.5 117 8.5C85 10.5 35 10.5 3 8.5Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    </span>
  );
};

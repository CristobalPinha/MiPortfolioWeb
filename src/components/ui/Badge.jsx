import React from 'react';

/**
 * Badge component for tags, skills and small labels.
 * Follows the "Emerald" theme of the portfolio.
 */
const Badge = ({ children, className = "", variant = "emerald" }) => {
  const variants = {
    emerald: "border-[#35d0c2]/25 bg-[#35d0c2]/8 text-text-main dark:bg-[#35d0c2]/15 hover:bg-[#35d0c2]/20",
    outline: "border-black/10 dark:border-white/10 bg-background text-text-main shadow-[2px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_10px_24px_rgba(53,208,194,0.10)]",
    ghost: "border-transparent bg-black/[0.04] dark:bg-white/[0.06] text-text-muted",
  };

  return (
    <span className={`px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 cursor-default ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

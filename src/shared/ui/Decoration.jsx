import React from 'react';

/**
 * Animated Gradient backgrounds and decorative shapes for sections.
 */
export const Decoration = ({ variant = "on-top" }) => {
  if (variant === "hero-glow") {
    return (
      <>
        {/* Top subtle line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#35d0c2]/50 to-transparent"></div>
        {/* Main top-right glow */}
        <div className="absolute -top-28 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#35d0c2]/8 blur-[120px]"></div>
        {/* Bottom-left contrast glow */}
        <div className="absolute -bottom-24 left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-black/5 blur-[120px] dark:bg-white/5"></div>
        {/* Bottom fade to content */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-background/65 to-background dark:via-background/65 dark:to-background"></div>
      </>
    );
  }

  return null;
};

/**
 * Standard dynamic background for sections
 */
export const SectionBackground = ({ children, className = "", variant = "gradient" }) => {
  const variants = {
    hero: "bg-[linear-gradient(180deg,#ffffff_0%,#f4f4f5_55%,#ececec_100%)] dark:bg-[linear-gradient(180deg,#0b0b0c_0%,#111113_55%,#17171a_100%)]",
    default: "bg-background",
  };

  return (
    <section className={`relative overflow-hidden ${variants[variant] || variants.default} ${className}`}>
      {children}
    </section>
  );
};


/**
 * Common Button component for the portfolio.
 * Supports different visual variants and handles consistent styling.
 */
const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "", 
  type = "button",
  href,
  target,
  rel
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-text-main text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
    outline: "border border-black/15 bg-white/70 text-text-main backdrop-blur-md hover:border-[#35d0c2]/60 hover:text-[#127c73] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-[#6ee7dd]",
    ghost: "text-text-muted hover:text-[#35d0c2] lowercase tracking-normal font-medium"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;

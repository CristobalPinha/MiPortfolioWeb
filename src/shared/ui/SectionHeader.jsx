
/**
 * Standardized Section Header for the portfolio.
 * Includes an overline, a main title with optional highlight, and a decorative line.
 */
const SectionHeader = ({ 
  overline, 
  title, 
  highlight, 
  className = "mb-16",
  centered = true 
}) => {
  // Split title to insert highlight if provided
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return title;
    
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {overline && (
        <span className="text-[#35d0c2] font-bold tracking-[0.3em] uppercase text-sm mb-4">
          {overline}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-text-main leading-none">
        {renderTitle()}
      </h2>
      <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#35d0c2] to-[#35d0c2]/40 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;

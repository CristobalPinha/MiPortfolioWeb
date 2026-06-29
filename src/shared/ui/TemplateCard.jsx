
/**
 * TemplateCard component that replicates the "Mac-style" window look
 * across the portfolio.
 */
const TemplateCard = ({ 
  title = "Template System v1.0", 
  children, 
  className = "", 
  innerClassName = "p-5",
  withGrid = true,
  withGradient = true,
  containerClassName = ""
}) => {
  return (
    <div className={`relative group ${containerClassName}`}>
      {/* Outer Glow/Blur effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-black/10 via-[#35d0c2]/15 to-black/5 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main Card Container */}
      <div className={`relative overflow-hidden rounded-[1.8rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111113] shadow-2xl backdrop-blur-sm ${className}`}>
        
        {/* Background Effects */}
        {withGrid && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>
        )}
        {withGradient && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#35d0c2]/8 via-transparent to-black/5 dark:to-white/5 opacity-80 pointer-events-none"></div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Mac-style Header */}
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.02] px-5 py-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted dark:text-white/45 flex items-center gap-2">
              <span className="w-1 h-3 bg-[#35d0c2]/70 rounded-full animate-pulse"></span>
              {title}
            </div>
          </div>

          {/* Content Area */}
          <div className={`flex-grow ${innerClassName}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;

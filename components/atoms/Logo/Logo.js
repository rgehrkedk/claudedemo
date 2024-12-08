const Logo = ({ currentTheme = 'blue', isDarkMode = false, isScrolled = false }) => {
  return (
    <div className={`relative transition-all duration-200 group
      ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
      <div className={`absolute inset-0 rounded-xl overflow-hidden 
        ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} 
        backdrop-blur-sm transition-all duration-500
        ${mythemes[currentTheme].subtle}`}>
        
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full transform transition-transform duration-700
            group-hover:scale-105"
        >
          <g className={`${mythemes[currentTheme].stroke} transition-all duration-300`}>
            <path
              d="M34,80 L50,20 L66,80"
              className="stroke-[18] fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39,55 L61,55"
              className="stroke-[18] fill-none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Logo;

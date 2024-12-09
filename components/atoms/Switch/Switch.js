'use client';
const Switch = ({ isActive, onChange, currentTheme, isDarkMode }) => {
  return (
    <button
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-all duration-200 
        ${isActive 
          ? mythemes[currentTheme].primary
          : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
    >
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm
        transition-all duration-200 ${isActive ? 'left-6' : 'left-1'}`} />
    </button>
  );
};

export default Switch;

'use client';
const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200';
  const variantStyles = {
    primary: 'py-3 text-white hover:opacity-90',
    switch: 'px-5 py-2 flex items-center gap-2'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

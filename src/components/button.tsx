import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-16 py-4 rounded-full bg-primary text-[#fff] text-[20px] font-sans font-bold border-[2px] border-[#fff] hover:border-primary hover:text-primary hover:bg-[#fff] disabled:opacity-50 ${className}` }
    >
      {label}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick,  className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-16 py-4 rounded-full bg-[#fff]  text-primary text-[20px] font-sans font-bold border-[2px] border-primary  hover:border-[#fff] hover:text-[#fff] hover:bg-primary disabled:opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};

import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {

    const baseStyle = "w-full py-3 px-6 rounded-lg text-lg font-bold transition-all duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50";

    const variantStyles = {
        primary: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400 disabled:bg-green-300",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400 disabled:bg-gray-200",
    };

    return (
        <button
            type={type}
            className={`${baseStyle} ${variantStyles[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;


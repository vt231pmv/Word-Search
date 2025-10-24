import React from 'react';

const LetterTile = ({ letter, isSelected, onMouseDown, onMouseEnter }) => {

    const baseClasses = "flex justify-center items-center w-full aspect-square rounded-md cursor-pointer transition-all duration-100 select-none";

    const dynamicStyles = {
        fontSize: 'calc(35px / (var(--grid-size) / 4))',
        borderWidth: 'calc(2px / (var(--grid-size) / 5))'
    };

    const selectedClasses = "bg-green-400 text-white transform scale-105 border-green-600";
    const defaultClasses = "bg-white text-gray-800 border-gray-300 hover:bg-gray-100";

    return (
        <div
            className={`${baseClasses} ${isSelected ? selectedClasses : defaultClasses}`}
            style={dynamicStyles}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
        >
            {letter}
        </div>
    );
};

export default LetterTile;


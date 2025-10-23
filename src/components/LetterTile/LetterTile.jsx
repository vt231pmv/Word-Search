import React from 'react';
import './LetterTile.css';

const LetterTile = ({ letter, isSelected, onMouseDown, onMouseEnter }) => {

    const className = `letter-tile ${isSelected ? 'selected' : ''}`;

    return (
        <div
            className={className}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
        >
            {letter}
        </div>
    );
};

export default LetterTile;


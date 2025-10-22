import React from 'react';
import './LetterTile.css';

const LetterTile = ({ letter }) => {
    return (
        <div className="letter-tile">
            {letter}
        </div>
    );
};

export default LetterTile;

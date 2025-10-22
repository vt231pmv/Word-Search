import React from 'react';
import LetterTile from '../LetterTile/LetterTile';
import './WordGrid.css';

const WordGrid = ({ gridPlaceholder }) => {
    return (
        <div className="word-grid">
            {gridPlaceholder.map((letter, index) => (
                <LetterTile key={index} letter={letter} />
            ))}
        </div>
    );
};

export default WordGrid;

import React from 'react';
import LetterTile from '../LetterTile/LetterTile';
import './WordGrid.css';

const WordGrid = ({ grid, selection, eventHandlers }) => {
    return (
        <div className="word-grid">
            {grid.map((letter, index) => (
                <LetterTile
                    key={index}
                    letter={letter}
                    isSelected={selection.includes(index)}
                    onMouseDown={() => eventHandlers.onMouseDown(index)}
                    onMouseEnter={() => eventHandlers.onMouseEnter(index)}
                />
            ))}
        </div>
    );
};

export default WordGrid;


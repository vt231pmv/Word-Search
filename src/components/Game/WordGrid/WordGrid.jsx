import React from 'react';
import LetterTile from '../LetterTile/LetterTile';

const WordGrid = ({ grid, selection, eventHandlers }) => {
    return (
        <div
            className="grid gap-1.5 sm:gap-2 p-2 sm:p-3 bg-gray-300 rounded-lg w-full max-w-xl mx-auto"
            style={{
                gridTemplateColumns: `repeat(var(--grid-size, 5), 1fr)`,
                gridTemplateRows: `repeat(var(--grid-size, 5), 1fr)`,
            }}
        >
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


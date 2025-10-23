import React from 'react';
import './WordList.css';

const WordList = ({ wordsToFind, foundWords }) => {
    return (
        <div className="word-list-container">
            <h3>Слова для пошуку:</h3>
            <ul className="word-list">
                {wordsToFind.map((word, index) => (
                    <li
                        key={index}
                        className={`word-item ${foundWords.includes(word) ? 'found' : ''}`}
                    >
                        {word}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WordList;


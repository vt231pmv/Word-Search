import React from 'react';
import './WordList.css';

const WordList = ({ wordsPlaceholder }) => {
    return (
        <div className="word-list-container">
            <h3>Слова для пошуку:</h3>
            <ul className="word-list">
                {wordsPlaceholder.map((word, index) => (
                    <li key={index} className="word-item">
                        {word}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WordList;

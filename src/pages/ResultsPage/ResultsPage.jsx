import React from 'react';
import Button from '../../components/Button/Button';
import './ResultsPage.css';

const ResultsPage = ({ onPlayAgain }) => {
    const timeTaken = '02:35';
    const wordsFound = 4;

    return (
        <div className="page-container">
            <h2>🎉 Вітаємо! 🎉</h2>
            <p>Ви знайшли всі слова!</p>
            <div className="results-summary">
                <p>Ваш час: <strong>{timeTaken}</strong></p>
                <p>Знайдено слів: <strong>{wordsFound}</strong></p>
            </div>
            <Button onClick={onPlayAgain}>
                Грати знову
            </Button>
        </div>
    );
};

export default ResultsPage;


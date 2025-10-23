import React from 'react';
import Button from '../../components/Button/Button';
import './ResultsPage.css';

const ResultsPage = ({ onPlayAgain, results }) => {
    return (
        <div className="page-container">
            <h2>🎉 Вітаємо! 🎉</h2>
            <p>Ви знайшли всі слова!</p>
            <div className="results-summary">
                {/* Використовуємо дані з props */}
                <p>Ваш час: <strong>{results.time}</strong></p>
                <p>Знайдено слів: <strong>{results.words}</strong></p>
            </div>
            <Button onClick={onPlayAgain}>
                Грати знову
            </Button>
        </div>
    );
};

export default ResultsPage;


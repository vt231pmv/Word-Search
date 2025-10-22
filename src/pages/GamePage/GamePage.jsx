import React from 'react';
import WordGrid from '../../components/WordGrid/WordGrid';
import WordList from '../../components/WordList/WordList';
import Button from '../../components/Button/Button';
import './GamePage.css';

const GamePage = ({ onGameEnd }) => {
    const gridPlaceholder = "ABCDEFGHIJKLMNOPQRSTUVWXY".split('');
    const wordsPlaceholder = ['REACT', 'GAME', 'CODE', 'WORD'];
    const wordsFound = 0;
    const time = '00:00';

    return (
        <div className="page-container game-page">
            <div className="game-info">
                <span>Слів знайдено: <strong>{wordsFound} / {wordsPlaceholder.length}</strong></span>
                <span>Час: <strong>{time}</strong></span>
            </div>

            <WordGrid gridPlaceholder={gridPlaceholder} />
            <WordList wordsPlaceholder={wordsPlaceholder} />

            <div className="game-controls">
                <Button onClick={onGameEnd}>
                    Завершити (Тест ЛР №1)
                </Button>
            </div>
        </div>
    );
};

export default GamePage;


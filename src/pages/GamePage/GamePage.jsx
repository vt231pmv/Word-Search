import React, { useEffect } from 'react';
import WordGrid from '../../components/WordGrid/WordGrid';
import WordList from '../../components/WordList/WordList';
import { useWordSearch } from '../../hooks/useWordSearch';
import Button from '../../components/Button/Button';
import './GamePage.css';

const GamePage = ({ onGameEnd }) => {
    const {
        grid,
        words,
        foundWords,
        selection,
        formattedTime,
        isGameWon,
        startGame,
        eventHandlers
    } = useWordSearch();

    useEffect(() => {
        startGame();
    }, [startGame]);

    useEffect(() => {
        if (isGameWon) {
            onGameEnd({
                time: formattedTime,
                words: foundWords.length
            });
        }
    }, [isGameWon, onGameEnd, formattedTime, foundWords.length]);

    return (
        <div className="page-container game-page">
            <div className="game-info">
                <span>Слів знайдено: <strong>{foundWords.length} / {words.length}</strong></span>
                <span>Час: <strong>{formattedTime}</strong></span>
            </div>

            {/* Передаємо обробники подій на все поле */}
            <div
                onMouseUp={eventHandlers.onMouseUp}
                onMouseLeave={eventHandlers.onMouseUp}
            >
                <WordGrid
                    grid={grid}
                    selection={selection}
                    eventHandlers={eventHandlers}
                />
            </div>

            <WordList
                wordsToFind={words}
                foundWords={foundWords}
            />

            {   }
            <div className="game-controls">
                <Button onClick={startGame} variant="secondary">
                    Перезапустити
                </Button>
            </div>
        </div>
    );
};

export default GamePage;


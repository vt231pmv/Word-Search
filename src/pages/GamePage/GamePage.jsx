import React, { useEffect, useState } from 'react';
import WordGrid from '../../components/WordGrid/WordGrid';
import WordList from '../../components/WordList/WordList';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useWordSearch } from '../../hooks/useWordSearch';
import { useSettings } from '../../context/SettingsContext';
import './GamePage.css';

// Сторінка гри
const GamePage = ({ onGameEnd, onBackToMenu }) => {
    const { settings } = useSettings();
    const [showWinModal, setShowWinModal] = useState(false);

    const {
        grid,
        words,
        foundWords,
        selection,
        formattedTime,
        isGameWon,
        startGame,
        eventHandlers
    } = useWordSearch({
        gridSize: settings.gridSize,
        wordCount: settings.wordCount,
    });

    useEffect(() => {
        startGame();
    }, [startGame]);

    useEffect(() => {
        if (isGameWon) {
            setShowWinModal(true);
        }
    }, [isGameWon]);

    const handleCloseModal = () => {
        setShowWinModal(false);
        onGameEnd({
            time: formattedTime,
            words: foundWords.length
        });
    };

    const handleRestartGame = () => {
        setShowWinModal(false);
        startGame();
    };

    return (
        <div className="page-container game-page">
            <div className="game-info">
                <span>Слів знайдено: <strong>{foundWords.length} / {words.length}</strong></span>
                <span>Час: <strong>{formattedTime}</strong></span>
            </div>

            <div
                onMouseUp={eventHandlers.onMouseUp}
                onMouseLeave={eventHandlers.onMouseUp}
                style={{ '--grid-size': settings.gridSize }}
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

            <div className="game-controls">
                <Button onClick={startGame} variant="secondary">
                    Перезапустити
                </Button>
                {/* --- нова кнопка --- */}
                <Button onClick={onBackToMenu} variant="secondary">
                    Повернутись в меню
                </Button>
            </div>

            {/* Рендеримо модальне вікно, якщо гра виграна */}
            {showWinModal && (
                <Modal
                    title="🎉 Вітаємо! 🎉"
                    onClose={handleCloseModal}
                    onRestartGame={handleRestartGame}
                >
                    <p>Ви знайшли всі слова!</p>
                    <p>Ваш час: <strong>{formattedTime}</strong></p>
                </Modal>
            )}
        </div>
    );
};

export default GamePage;



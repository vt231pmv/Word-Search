import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordGrid from '../../components/WordGrid/WordGrid';
import WordList from '../../components/WordList/WordList';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useWordSearch } from '../../hooks/useWordSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addScore } from '../../store/slices/leaderboardSlice';

const GamePage = () => {
    const settings = useSelector((state) => state.settings);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

        dispatch(addScore({
            time: formattedTime,
            gridSize: settings.gridSize,
            wordCount: words.length,
        }));

        navigate('/');
    };

    const handleRestartGame = () => {
        setShowWinModal(false);

        dispatch(addScore({
            time: formattedTime,
            gridSize: settings.gridSize,
            wordCount: words.length,
        }));

        startGame();
    };

    return (
        <div className="w-full flex flex-col items-center max-w-xl"> {/* Збільшив max-w */}
            <div className="flex justify-between w-full mx-auto mb-4 px-2">
                <div className="text-lg font-semibold text-gray-700">
                    Слів: <span className="font-bold text-green-600">{foundWords.length} / {words.length}</span>
                </div>
                <div className="text-lg font-semibold text-gray-700">
                    Час: <span className="font-bold text-gray-900">{formattedTime}</span>
                </div>
            </div>

            <div
                className="w-full touch-none"
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

            <div className="w-full max-w-xs flex flex-col sm:flex-row gap-3 mt-6">
                <Button onClick={startGame} variant="secondary">
                    Перезапустити
                </Button>
                <Button onClick={() => navigate('/')} variant="secondary">
                    На головну
                </Button>
            </div>

            {showWinModal && (
                <Modal
                    title="🎉 Вітаємо! 🎉"
                    onClose={handleCloseModal}
                    onRestartGame={handleRestartGame}
                >
                    <p>Ви знайшли всі {words.length} слова!</p>
                    <p>Ваш час: <strong className="text-xl text-gray-800">{formattedTime}</strong></p>
                </Modal>
            )}
        </div>
    );
};

export default GamePage;


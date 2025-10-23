import React, { useState } from 'react';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import './App.css';

const PAGES = {
    START: 'start',
    GAME: 'game',
    RESULTS: 'results',
};

function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.START);
    const [gameResults, setGameResults] = useState({ time: '00:00', words: 0 });

    const handleStartGame = () => {
        setCurrentPage(PAGES.GAME);
    };

    const handleGameEnd = (results) => {
        setGameResults(results);
        setCurrentPage(PAGES.RESULTS);
    };

    const handlePlayAgain = () => {
        setCurrentPage(PAGES.START);
    };

    const renderPage = () => {
        switch (currentPage) {
            case PAGES.GAME:
                return <GamePage onGameEnd={handleGameEnd} />;
            case PAGES.RESULTS:
                return <ResultsPage onPlayAgain={handlePlayAgain} results={gameResults} />;
            case PAGES.START:
            default:
                return <StartPage onStartGame={handleStartGame} />;
        }
    };

    return (
        <div className="app">
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;


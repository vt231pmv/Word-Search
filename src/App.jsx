import React, { useState } from 'react';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import './App.css';

const PAGES = {
    START: 'start',
    GAME: 'game',
    RESULTS: 'results',
    SETTINGS: 'settings',
};

function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.START);
    const [gameResults, setGameResults] = useState({ time: '00:00', words: 0 });

    const goToStart = () => setCurrentPage(PAGES.START);
    const goToSettings = () => setCurrentPage(PAGES.SETTINGS);
    const handleStartGame = () => setCurrentPage(PAGES.GAME);

    const handleGameEnd = (results) => {
        setGameResults(results);

        goToStart();
    };

    const renderPage = () => {
        switch (currentPage) {
            case PAGES.GAME:
                return <GamePage onGameEnd={handleGameEnd} onBackToMenu={goToStart} />;
            case PAGES.RESULTS:

                return <ResultsPage onPlayAgain={goToStart} results={gameResults} />;
            case PAGES.SETTINGS:
                return <SettingsPage onBackToStart={goToStart} />;
            case PAGES.START:
            default:
                return <StartPage onStartGame={handleStartGame} onGoToSettings={goToSettings} />;
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


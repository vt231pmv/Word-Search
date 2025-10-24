import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';

function PageLayout() {
    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl text-center flex flex-col items-center w-full max-w-lg mx-auto my-8">
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<StartPage />} />
                <Route path="game" element={<GamePage />} />
                <Route path="settings" element={<SettingsPage />} />
                {/* */}
                <Route path="leaderboard" element={<LeaderboardPage />} />
            </Route>
            <Route path="*" element={<div className="text-white">Сторінку не знайдено</div>} />
        </Routes>
    );
}

export default App;


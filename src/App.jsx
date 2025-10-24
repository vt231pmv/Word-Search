import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

function PageLayout() {
    return (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl text-center flex flex-col items-center w-full max-w-lg mx-auto">
            <Outlet /> {/* Тут будуть рендеритись сторінки */}
        </div>
    );
}

function App() {

    return (
        <Routes>
            {/* Всі сторінки будуть обгорнуті в PageLayout */}
            <Route path="/" element={<PageLayout />}>
                {/* Головна сторінка */}
                <Route index element={<StartPage />} />
                {/* Сторінка гри */}
                <Route path="game" element={<GamePage />} />
                {/* Сторінка налаштувань */}
                <Route path="settings" element={<SettingsPage />} />
            </Route>
            {/* можна додати 404 сторінку */}
            <Route path="*" element={<div>Сторінку не знайдено</div>} />
        </Routes>
    );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SettingsProvider } from './context/SettingsContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Обгортаємо додаток у Роутер та Провайдер */}
        <BrowserRouter>
            <SettingsProvider>
                <App />
            </SettingsProvider>
        </BrowserRouter>
    </React.StrictMode>
);


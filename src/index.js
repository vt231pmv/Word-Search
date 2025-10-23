import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SettingsProvider } from './context/SettingsContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Обгортаємо весь додаток у провайдер налаштувань */}
        <SettingsProvider>
            <App />
        </SettingsProvider>
    </React.StrictMode>
);


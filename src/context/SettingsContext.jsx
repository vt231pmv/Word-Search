import React, { createContext, useContext, useState, useEffect } from 'react';

// Створюємо контекст
const SettingsContext = createContext();

// Налаштування за замовчуванням
const defaultSettings = {
    gridSize: 5, // 5x5
    wordCount: 4,
};

// Функція для завантаження налаштувань з localStorage
const loadSettings = () => {
    try {
        const storedSettings = localStorage.getItem('wordSearchSettings');
        if (storedSettings) {
            return JSON.parse(storedSettings);
        }
    } catch (e) {
        console.error("Failed to load settings from localStorage", e);
    }
    return defaultSettings;
};

// Провайдер контексту
export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(loadSettings);

    // Ефект для збереження в localStorage при зміні налаштувань
    useEffect(() => {
        try {
            localStorage.setItem('wordSearchSettings', JSON.stringify(settings));
        } catch (e) {
            console.error("Failed to save settings to localStorage", e);
        }
    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

// Кастомний хук для легкого доступу до контексту
export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};


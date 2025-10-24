import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import leaderboardReducer from './slices/leaderboardSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('wordSearchState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn("Could not load state from localStorage", err);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('wordSearchState', serializedState);
    } catch (err) {
        console.warn("Could not save state to localStorage", err);
    }
};

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        leaderboard: leaderboardReducer,
    },
    preloadedState: preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});


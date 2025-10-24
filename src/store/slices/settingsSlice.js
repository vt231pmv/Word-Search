import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gridSize: 5,
    wordCount: 4,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        setSettings: (state, action) => {
            state.gridSize = action.payload.gridSize;
            state.wordCount = action.payload.wordCount;
        },
    },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;


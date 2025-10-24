import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scores: [],
};

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: initialState,
    reducers: {
        addScore: (state, action) => {
            const newScore = {
                ...action.payload,
                id: new Date().toISOString(),
            };
            state.scores.push(newScore);
        },
        clearScores: (state) => {
            state.scores = [];
        },
    },
});

export const { addScore, clearScores } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;


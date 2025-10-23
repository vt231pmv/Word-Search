import { useState, useEffect, useMemo, useCallback } from 'react';
import { generateGrid } from '../utils/gridGenerator';

const ALL_WORDS = ['МРІЯ', 'НЕБО', 'КОД', 'СЛОВО', 'ГРА', 'ЛІТО', 'ЗИМА', 'СВІТ', 'МИР', 'РІКА', 'ГОРА', 'МОВА'];

export const useWordSearch = ({ gridSize = 5, wordCount = 4 }) => {
    const [grid, setGrid] = useState([]);

    const [words, setWords] = useState(() =>
        [...ALL_WORDS].sort(() => 0.5 - Math.random()).slice(0, wordCount)
    );

    const [foundWords, setFoundWords] = useState([]);
    const [selection, setSelection] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);

    const [time, setTime] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);

    const startGame = useCallback(() => {
        const newWords = [...ALL_WORDS].sort(() => 0.5 - Math.random()).slice(0, wordCount);
        setWords(newWords);

        setGrid(generateGrid(newWords, gridSize));

        setFoundWords([]);
        setSelection([]);
        setTime(0);
        setIsGameWon(false);
        setIsGameActive(true);
    }, [gridSize, wordCount]);

    useEffect(() => {
        let interval;
        if (isGameActive) {
            interval = setInterval(() => {
                setTime(t => t + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isGameActive]);

    useEffect(() => {
        if (words.length > 0 && foundWords.length === words.length) {
            setIsGameWon(true);
            setIsGameActive(false);
        }
    }, [foundWords, words]);


    const handleMouseDown = (index) => {
        setIsSelecting(true);
        setSelection([index]);
    };

    const handleMouseEnter = (index) => {
        if (isSelecting && !selection.includes(index)) {
            setSelection(prev => [...prev, index]);
        }
    };

    const handleMouseUp = () => {
        setIsSelecting(false);

        const selectedWord = selection.map(index => grid[index]).join('');

        if (words.includes(selectedWord) && !foundWords.includes(selectedWord)) {
            setFoundWords(prev => [...prev, selectedWord]);
        }

        setSelection([]);
    };

    const formattedTime = useMemo(() => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }, [time]);

    return {
        grid,
        words,
        foundWords,
        selection,
        formattedTime,
        isGameWon,
        startGame,
        eventHandlers: {
            onMouseDown: handleMouseDown,
            onMouseEnter: handleMouseEnter,
            onMouseUp: handleMouseUp,
        }
    };
};


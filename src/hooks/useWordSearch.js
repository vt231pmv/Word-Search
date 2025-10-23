import { useState, useEffect, useMemo, useCallback } from 'react';
import { generateGrid } from '../utils/gridGenerator';

const WORDS_TO_FIND = ['МРІЯ', 'ГРА', 'КОД', 'СЛОВО', 'НЕБО'];

export const useWordSearch = () => {
    // Стан для всієї гри
    const [grid, setGrid] = useState([]);
    const words = useMemo(() => WORDS_TO_FIND, []);
    const [foundWords, setFoundWords] = useState([]);

    const [selection, setSelection] = useState([]); // Масив індексів виділених клітинок
    const [isSelecting, setIsSelecting] = useState(false);

    const [time, setTime] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);

    // Ініціалізація гри
    const startGame = useCallback(() => {
        const upperCaseWords = words.map(w => w.toUpperCase());
        setGrid(generateGrid(upperCaseWords));
        setFoundWords([]);
        setSelection([]);
        setTime(0);
        setIsGameWon(false);
        setIsGameActive(true);
    }, [words]);

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

    // --- Обробники взаємодії з полем ---

    const handleMouseDown = (index) => {
        setIsSelecting(true);
        setSelection([index]); // Починаємо нове виділення
    };

    const handleMouseEnter = (index) => {
        if (isSelecting && !selection.includes(index)) {

            setSelection(prev => [...prev, index]);
        }
    };

    const handleMouseUp = () => {
        setIsSelecting(false);

        const selectedWord = selection.map(index => grid[index]).join('');

        let foundMatch = null;
        if (words.includes(selectedWord) && !foundWords.includes(selectedWord)) {
            foundMatch = selectedWord;
        }

        if (foundMatch) {
            setFoundWords(prev => [...prev, foundMatch]);
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


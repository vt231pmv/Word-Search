// --- Утиліта для генерації ігрового поля ---

const DIRECTIONS = [
    { r: 0, c: 1 },
    { r: 1, c: 0 },
];

function getRandomLetter() {
    const alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function placeWords(grid, words, size) {
    const placedWords = [];
    for (const word of words) {
        if (word.length > size) {
            console.warn(`Word "${word}" is too long for grid size ${size} and was skipped.`);
            continue;
        }

        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 50) {
            attempts++;
            const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
            const rStart = Math.floor(Math.random() * size);
            const cStart = Math.floor(Math.random() * size);

            let r = rStart;
            let c = cStart;
            let fits = true;

            for (let i = 0; i < word.length; i++) {
                if (r < 0 || r >= size || c < 0 || c >= size || (grid[r][c] !== null && grid[r][c] !== word[i])) {
                    fits = false;
                    break;
                }
                r += direction.r;
                c += direction.c;
            }

            if (fits) {
                r = rStart;
                c = cStart;
                for (let i = 0; i < word.length; i++) {
                    grid[r][c] = word[i];
                    r += direction.r;
                    c += direction.c;
                }
                placed = true;
                placedWords.push(word);
            }
        }
    }
    return { grid, placedWords };
}

export function generateGrid(words, size = 5) {
    let newGrid = Array(size).fill(null).map(() => Array(size).fill(null));

    const { grid, placedWords } = placeWords(newGrid, words, size);

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (grid[r][c] === null) {
                grid[r][c] = getRandomLetter();
            }
        }
    }

    return { grid: grid.flat(), placedWords: placedWords };
}


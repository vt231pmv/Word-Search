// --- Утиліта для генерації ігрового поля ---

const SIZE = 5; // 5x5
const DIRECTIONS = [
    { r: 0, c: 1 },
    { r: 1, c: 0 },
];

function getRandomLetter() {
    const alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}


function placeWords(grid, words) {
    for (const word of words) {
        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 50) {
            attempts++;
            const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
            const rStart = Math.floor(Math.random() * SIZE);
            const cStart = Math.floor(Math.random() * SIZE);

            let r = rStart;
            let c = cStart;
            let fits = true;

            for (let i = 0; i < word.length; i++) {
                if (r < 0 || r >= SIZE || c < 0 || c >= SIZE || (grid[r][c] !== null && grid[r][c] !== word[i])) {
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
            }
        }

        if (!placed) {
            console.warn(`Не вдалося розмістити слово: ${word}. Повторна генерація поля...`);
            return false;
        }
    }
    return true;
}

export function generateGrid(words) {
    let grid;
    let success = false;
    let maxAttempts = 20;


    do {
        maxAttempts--;
        grid = Array(SIZE).fill(null).map(() => Array(SIZE).fill(null));

        success = placeWords(grid, words);

        if (maxAttempts <= 0) {
            console.error("Не вдалося згенерувати поле. Перевірте кількість та довжину слів.");
            return Array(SIZE * SIZE).fill('X');
        }

    } while (!success);

    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (grid[r][c] === null) {
                grid[r][c] = getRandomLetter();
            }
        }
    }

    return grid.flat();
}


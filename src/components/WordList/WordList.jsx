import React from 'react';

const WordList = ({ wordsToFind, foundWords }) => {
    return (
        <div className="w-full max-w-xl mx-auto mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-center text-gray-700 mb-3">
                Слова для пошуку:
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {wordsToFind.map((word, index) => (
                    <li
                        key={index}
                        className={`py-1 px-4 rounded-full text-base sm:text-lg font-medium transition-all duration-200
                            ${foundWords.includes(word)
                            ? 'bg-gray-400 text-white line-through'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    >
                        {word}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WordList;


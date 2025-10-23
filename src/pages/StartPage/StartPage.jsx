import React from 'react';
import Button from '../../components/Button/Button';
import './StartPage.css';

const StartPage = ({ onStartGame, onGoToSettings }) => {
    return (
        <div className="page-container">
            <h1>Пошук слова</h1>
            <p className="description">Знайдіть усі слова, заховані в сітці з літер!</p>
            <div className="start-actions">
                <Button onClick={onStartGame}>
                    Почати гру
                </Button>
                {/* Додаємо кнопку для переходу в налаштування */}
                <Button onClick={onGoToSettings} variant="secondary">
                    Налаштування
                </Button>
            </div>
        </div>
    );
};


export default StartPage;


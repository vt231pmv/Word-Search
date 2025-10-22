import React from 'react';
import Button from '../../components/Button/Button';
import './StartPage.css';

const StartPage = ({ onStartGame }) => {
    return (
        <div className="page-container">
            <h1>Пошук слова</h1>
            <p className="description">Знайдіть усі слова, заховані в сітці з літер!</p>
            <Button onClick={onStartGame}>
                Почати гру
            </Button>
        </div>
    );
};

export default StartPage;


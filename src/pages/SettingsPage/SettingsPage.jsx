import React from 'react';
import { useForm } from 'react-hook-form';
import { useSettings } from '../../context/SettingsContext';
import Button from '../../components/Button/Button';
import './SettingsPage.css';

// Сторінка налаштувань гри
const SettingsPage = ({ onBackToStart }) => {
    const { settings, setSettings } = useSettings();
    const { register, handleSubmit } = useForm({
        defaultValues: settings // Заповнюємо форму поточними налаштуваннями
    });

    const onSubmit = (data) => {
        // Оновлюємо налаштування в контексті/localStorage
        setSettings({
            gridSize: parseInt(data.gridSize, 10),
            wordCount: parseInt(data.wordCount, 10),
        });
        alert('Налаштування збережено!'); // Простий спосіб повідомити користувача
        onBackToStart(); // Повертаємось на головну
    };

    return (
        <div className="page-container settings-page">
            <h2>Налаштування гри</h2>
            <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="gridSize">Розмір поля:</label>
                    <select id="gridSize" {...register('gridSize')}>
                        <option value="5">Маленьке (5x5)</option>
                        <option value="7">Середнє (7x7)</option>
                        <option value="10">Велике (10x10)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="wordCount">Кількість слів:</label>
                    <select id="wordCount" {...register('wordCount')}>
                        <option value="4">4 слова</option>
                        <option value="6">6 слів</option>
                        <option value="8">8 слів</option>
                    </select>
                </div>

                <div className="form-actions">
                    <Button type="submit" variant="primary">
                        Зберегти
                    </Button>
                    <Button onClick={onBackToStart} variant="secondary">
                        Назад
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SettingsPage;


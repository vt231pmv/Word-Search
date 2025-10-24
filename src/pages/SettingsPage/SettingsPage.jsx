import React from 'react';
import { useForm } from 'react-hook-form';
import { useSettings } from '../../context/SettingsContext';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
    const { settings, setSettings } = useSettings();
    const navigate = useNavigate(); // Ініціалізуємо хук
    const { register, handleSubmit } = useForm({
        defaultValues: settings
    });

    const onSubmit = (data) => {
        setSettings({
            gridSize: parseInt(data.gridSize, 10),
            wordCount: parseInt(data.wordCount, 10),
        });
        alert('Налаштування збережено!');
        navigate('/');
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Налаштування гри</h2>
            <form className="w-full max-w-xs flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

                {/* Група для Розміру поля */}
                <div className="flex flex-col text-left">
                    <label htmlFor="gridSize" className="text-base font-semibold text-gray-700 mb-2">
                        Розмір поля:
                    </label>
                    <select
                        id="gridSize"
                        {...register('gridSize')}
                        className="p-3 w-full rounded-lg border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 transition"
                    >
                        <option value="5">Маленьке (5x5)</option>
                        <option value="7">Середнє (7x7)</option>
                        <option value="10">Велике (10x10)</option>
                    </select>
                </div>

                {/* Група для Кількості слів */}
                <div className="flex flex-col text-left">
                    <label htmlFor="wordCount" className="text-base font-semibold text-gray-700 mb-2">
                        Кількість слів:
                    </label>
                    <select
                        id="wordCount"
                        {...register('wordCount')}
                        className="p-3 w-full rounded-lg border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 transition"
                    >
                        <option value="4">4 слова</option>
                        <option value="6">6 слів</option>
                        <option value="8">8 слів</option>
                    </select>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                    <Button type="submit" variant="primary">
                        Зберегти
                    </Button>
                    <Button onClick={() => navigate('/')} variant="secondary">
                        Назад
                    </Button>
                </div>
            </form>
        </>
    );
};

export default SettingsPage;


import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';

const Modal = ({ title, children, onClose, onRestartGame }) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            {/* Вміст модального вікна */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-center w-full max-w-sm flex flex-col items-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
                <div className="text-lg text-gray-600 mb-6">
                    {children}
                </div>
                <div className="w-full flex flex-col gap-3">
                    <Button onClick={onRestartGame} variant="primary">
                        Нова гра
                    </Button>
                    <Button onClick={onClose} variant="secondary">
                        На головну
                    </Button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;


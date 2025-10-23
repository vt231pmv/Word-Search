import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import './Modal.css';

// Модальне вікно, яке використовує Portal
const Modal = ({ title, children, onClose, onRestartGame }) => {
    // Рендеримо в #modal-root, який знаходиться в index.html
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-actions">
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


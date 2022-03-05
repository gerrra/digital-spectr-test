import React, { useEffect, useState } from 'react';
import './modalDialog.scss';

interface ModalDialogProps {
    closeCallback: (update?: boolean) => any;
}

export const ModalDialog: React.FC<ModalDialogProps> = (props) => {
    return (
        <div
            className={'modal-dialog'}
        >
            <div
                className={'modal-dialog__shadow-background'}
                onClick={() => props.closeCallback()}
            >
            </div>
            <div
                className={'modal-dialog__body-wrap'}
            >
                <div
                    className={'modal-dialog__body'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1>Отмена бронирования полёта</h1>
                    <p>Вы действительно хотите отменить бронирование полёта?</p>
                    <div
                        className={'modal-dialog__action-wrap'}
                    >
                        <button
                            data-hystclose
                            className="hystmodal__close"
                            onClick={() => props.closeCallback(false)}
                        >
                            Закрыть
                        </button>
                        <button
                            data-hystclose
                            className="hystmodal__close"
                            onClick={() => props.closeCallback(true)}
                        >
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

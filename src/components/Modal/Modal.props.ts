import type { ReactNode } from 'react';

export interface ModalProps {
    active: boolean;
    setActive: any;
    children: ReactNode;
}

export interface KeyboardEvent {
    keyCode: number;
}

import type { ReactNode } from 'react';

export interface ModalProps {
    active: boolean;
    setActive: (value: string) => void;
    children: ReactNode;
}

export interface KeyboardEvent {
    keyCode: number;
}

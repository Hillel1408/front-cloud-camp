export interface ButtonProps {
    text: string;
    color: string;
    bg: string;
    id: string;
    type?: 'reset' | 'button' | 'submit';
    click?: () => void;
}

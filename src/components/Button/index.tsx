import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    color: string;
    bg: string;
    id: string;
    type?: 'reset' | 'button' | 'submit';
    click?: () => void;
}

function Button({ text, color, bg, id, type, click }: ButtonProps) {
    return (
        <button
            id={id}
            className={styles.btn}
            style={{ backgroundColor: `${bg}`, color: `${color}` }}
            type={type && type}
            onClick={(e) => {
                if (click) {
                    e.preventDefault();
                    click();
                }
            }}
        >
            {text}
        </button>
    );
}

export { Button };

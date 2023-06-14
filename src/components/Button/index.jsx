import styles from './Button.module.scss';

function Button({ text, color, bg, id, href, type, click }) {
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

import styles from './Button.module.scss';

function Button({ text, color, bg, id }) {
    return (
        <a
            id={id}
            className={styles.btn}
            style={{ backgroundColor: `${bg}`, color: `${color}` }}
            href="/"
        >
            {text}
        </a>
    );
}

export { Button };

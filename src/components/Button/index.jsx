import styles from './Button.module.scss';

function Button({ text, color, bg, id }) {
    return (
        <a
            className={styles.btn}
            style={{ backgroundColor: `${bg}`, color: `${color}` }}
            href="/"
            id={id}
        >
            {text}
        </a>
    );
}

export { Button };

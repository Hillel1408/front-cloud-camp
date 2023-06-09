import { NavLink } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ text, color, bg, id, href, type }) {
    return (
        <button
            href={href}
            id={id}
            className={styles.btn}
            style={{ backgroundColor: `${bg}`, color: `${color}` }}
            type={type && type}
        >
            {text}
        </button>
    );
}

export { Button };

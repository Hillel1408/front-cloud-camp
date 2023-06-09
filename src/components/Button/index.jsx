import { useNavigate } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ text, color, bg, id, href, type }) {
    const navigate = useNavigate();

    const clickHandler = (e) => {
        e.preventDefault();
        navigate(href);
    };

    return (
        <button
            id={id}
            className={styles.btn}
            style={{ backgroundColor: `${bg}`, color: `${color}` }}
            type={type && type}
            onClick={(e) => href && clickHandler(e)}
        >
            {text}
        </button>
    );
}

export { Button };

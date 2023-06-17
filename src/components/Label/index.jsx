import styles from './Label.module.scss';

function Label({ children, width, direction }) {
    return (
        <label
            className={styles.label}
            style={{ width: width, flexDirection: direction }}
        >
            {children}
        </label>
    );
}

export { Label };

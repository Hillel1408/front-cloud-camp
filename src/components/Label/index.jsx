import styles from './Label.module.scss';

function Label({ children, width }) {
    return (
        <label className={styles.label} style={width && { width: width }}>
            {children}
        </label>
    );
}

export { Label };

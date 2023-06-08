import styles from './Label.module.scss';

function Label({ children }) {
    return <label className={styles.label}>{children}</label>;
}

export { Label };

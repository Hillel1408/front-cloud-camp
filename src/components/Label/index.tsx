import { LabelProps } from './Label.props';
import styles from './Label.module.scss';

function Label({ children, width }: LabelProps) {
    return (
        <label className={styles.label} style={{ width: width }}>
            {children}
        </label>
    );
}

export { Label };

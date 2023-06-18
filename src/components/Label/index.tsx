import type { ReactNode } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
    width?: string;
    children: ReactNode;
}

function Label({ children, width }: LabelProps) {
    return (
        <label className={styles.label} style={{ width: width }}>
            {children}
        </label>
    );
}

export { Label };

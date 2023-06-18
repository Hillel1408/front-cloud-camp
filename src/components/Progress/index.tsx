import classNames from 'classnames';
import styles from './Progress.module.scss';

interface ProgressProps {
    count: number;
    active: number;
}

function Progress({ count, active }: ProgressProps) {
    return (
        <div className={styles.block}>
            <div
                className={styles.progress}
                style={{ width: ((active - 1) * 100) / (count - 1) + '%' }}
            ></div>
            {new Array(count).fill('').map((item, index) => (
                <span
                    key={index}
                    className={classNames(
                        styles.blockItem,
                        index < active && styles.blockItemActive
                    )}
                >
                    {active === index + 1 && <i></i>}
                    {index < active - 1 && <img src="/icon-5.svg" alt="" />}
                </span>
            ))}
        </div>
    );
}

export { Progress };

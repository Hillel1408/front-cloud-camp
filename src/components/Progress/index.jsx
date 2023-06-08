import classNames from 'classnames';
import styles from './Progress.module.scss';

function Progress({ arr }) {
    return (
        <div className={styles.block}>
            {arr.map((item, index) => (
                <span
                    className={classNames(
                        styles.blockItem,
                        item && styles.blockItemActive
                    )}
                >
                    {item && <i></i>}
                </span>
            ))}
        </div>
    );
}

export { Progress };

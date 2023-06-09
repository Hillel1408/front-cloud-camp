import classNames from 'classnames';
import styles from './Progress.module.scss';

function Progress({ count, active }) {
    return (
        <div className={styles.block}>
            {new Array(count).fill('').map((item, index) => (
                <span
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
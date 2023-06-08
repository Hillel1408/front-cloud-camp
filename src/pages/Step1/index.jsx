import styles from './Step1.module.scss';
import { Progress } from '../../components/Progress';

function Step1() {
    return (
        <div className={styles.block}>
            <Progress count={3} active={1} />
        </div>
    );
}

export { Step1 };

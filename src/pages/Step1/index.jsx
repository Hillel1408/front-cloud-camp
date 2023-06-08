import styles from './Step1.module.scss';
import { Progress } from '../../components/Progress';

function Step1() {
    return (
        <div className={styles.block}>
            <Progress arr={[true, false, false]} />
        </div>
    );
}

export { Step1 };

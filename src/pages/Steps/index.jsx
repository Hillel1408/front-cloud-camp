import { Button } from '../../components/Button';
import styles from './Steps.module.scss';
import { Progress } from '../../components/Progress';
import { useState } from 'react';
import { Step1 } from '../../components/Step1';
import { Step2 } from '../../components/Step2';
import { Step3 } from '../../components/Step3';

function Steps() {
    const count = 3; //количество форм
    const [active, setActive] = useState(3); //активная форма

    return (
        <div className={styles.block}>
            <Progress count={count} active={active} />
            <Step1 active={active} setActive={setActive} />
            <Step2 active={active} setActive={setActive} />
            <Step3 active={active} setActive={setActive} />
        </div>
    );
}

export { Steps };

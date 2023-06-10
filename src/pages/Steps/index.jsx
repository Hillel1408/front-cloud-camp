import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import styles from './Steps.module.scss';
import { Progress } from '../../components/Progress';
import { useState } from 'react';
import { Step1 } from '../../components/Step1';
import { Step2 } from '../../components/Step2';
import { Step3 } from '../../components/Step3';

function Steps() {
    const count = 3; //количество форм
    const [active, setActive] = useState(2); //активная форма

    return (
        <>
            <div className={styles.block}>
                <Progress count={count} active={active} />
                <Step1 active={active} setActive={setActive} />
                <Step2 active={active} setActive={setActive} />
                <Step3 active={active} setActive={setActive} />
            </div>
            <Modal active={false}>
                <div className={styles.succes}>
                    <h2 className="title">Форма успешно отправлена</h2>
                    <div className={styles.succesIcon}>
                        <img src="/icon-2.svg" alt="" />
                    </div>
                    <Button
                        text="На главную"
                        bg="#5558FA"
                        color="white"
                        id="button-to-main"
                    />
                </div>
            </Modal>
            <Modal active={false}>
                <div className={styles.error}>
                    <div className={styles.errorClose}>
                        <img src="/icon-4.svg" alt="" />
                    </div>
                    <h2 className="title">Ошибка</h2>
                    <div className={styles.errorIcon}>
                        <img src="/icon-3.svg" alt="" />
                    </div>
                    <Button
                        text="Закрыть"
                        bg="#5558FA"
                        color="white"
                        id="button-close"
                    />
                </div>
            </Modal>
        </>
    );
}

export { Steps };

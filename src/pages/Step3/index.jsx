import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import styles from './Step3.module.scss';

function Step3() {
    return (
        <div>
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
            <Modal active={true}>
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
        </div>
    );
}

export { Step3 };

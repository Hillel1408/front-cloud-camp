import { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';

function Modal({ active, setActive, children }) {
    const closeModal = () => {
        setActive('');
        document.body.classList.remove('lock');
    };

    useEffect(() => {
        const closeModalEsc = (e) => {
            if (e.keyCode === 27) {
                closeModal();
            }
        };
        window.addEventListener('keydown', closeModalEsc);
        return () => window.removeEventListener('keydown', closeModalEsc);
    }, []);

    active && document.body.classList.add('lock');

    return (
        <div
            className={
                active
                    ? classNames(styles.modal, styles.modalOpen)
                    : styles.modal
            }
            onClick={() => closeModal()}
        >
            <div className={styles.modalBody}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={
                        active
                            ? classNames(
                                  styles.modalContent,
                                  styles.modalContentOpen
                              )
                            : styles.modalContent
                    }
                >
                    <div className={styles.modalBlock}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export { Modal };

import { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';

function Modal({ active, setActive }) {
    const closeModal = () => {
        setActive(false);
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

    return <div></div>;
}

export { Modal };

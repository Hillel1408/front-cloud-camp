import { useForm } from 'react-hook-form';
import { Modal } from '../../components/Modal';
import { Label } from '../Label';
import { Button } from '../../components/Button';
import styles from './Step3.module.scss';
import stylesInput from '../Input/Input.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { addForm } from '../../store/formsSlice';

function Step3({ active }) {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            about: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        dispatch(addForm(values));
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                style={active === 3 ? { display: 'flex' } : { display: 'none' }}
            >
                <div>
                    <Label width="100%">
                        About
                        <textarea
                            className={classNames(
                                stylesInput.input,
                                'textarea'
                            )}
                            placeholder="Placeholder"
                            id="field-about"
                            {...register('about', {
                                required: 'Поле обязательно к заполнению',
                                maxLength: {
                                    value: 200,
                                    message: 'Максимум 200 символов',
                                },
                            })}
                        />
                        <span className={styles.counter}>
                            {watch('about').length} / 200
                        </span>
                    </Label>
                    <p className="error">
                        {errors?.about && errors?.about?.message}
                    </p>
                </div>
                <div className="buttons">
                    <Button
                        text="Назад"
                        bg="white"
                        color="#5558FA"
                        id="button-back"
                        href="/"
                    />
                    <Button
                        text="Отправить"
                        bg="#5558FA"
                        color="white"
                        id="button-send"
                        type="submit"
                    />
                </div>
            </form>
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

export { Step3 };

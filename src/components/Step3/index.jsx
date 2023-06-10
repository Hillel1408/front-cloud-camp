import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label } from '../Label';
import { Button } from '../../components/Button';
import styles from './Step3.module.scss';
import stylesInput from '../Input/Input.module.scss';
import classNames from 'classnames';

function Step3({ active }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            about: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={active === 3 ? { display: 'block' } : { display: 'none' }}
        >
            <div>
                <Label>
                    About
                    <textarea
                        className={classNames(stylesInput.input, 'textarea')}
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
    );
}

export { Step3 };

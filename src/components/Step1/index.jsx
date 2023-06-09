import { useForm } from 'react-hook-form';
import { Label } from '../Label';
import { Button } from '../../components/Button';
import stylesInput from '../Input/Input.module.scss';
import styles from './Step1.module.scss';

function Step1({}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nickname: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Label>
                Nickname
                <input
                    type="text"
                    className={stylesInput.input}
                    placeholder="Placeholder"
                    {...register('nickname', {
                        required: 'Поле обязательно к заполнению',
                        maxLength: {
                            value: 30,
                            message: 'Максимум 30 символов',
                        },
                    })}
                />
            </Label>
            <div>{errors?.nickname && errors?.nickname?.message}</div>
            <div className="buttons">
                <Button
                    text="Назад"
                    bg="white"
                    color="#5558FA"
                    id="button-back"
                />
                <Button
                    text="Далее"
                    bg="#5558FA"
                    color="white"
                    id="button-next"
                    type="submit"
                />
            </div>
        </form>
    );
}

export { Step1 };

import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import styles from './Step2.module.scss';

function Step2({ active, setActive }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            radio: '1',
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={active === 2 ? { display: 'block' } : { display: 'none' }}
        >
            <div className={styles.radioGroup}>
                Radio group
                <label>
                    <input
                        id="field-radio-group-option-1"
                        type="radio"
                        value="1"
                        {...register('radio')}
                    />
                    1
                </label>
                <label>
                    <input
                        id="field-radio-group-option-2"
                        type="radio"
                        value="2"
                        {...register('radio')}
                    />
                    2
                </label>
                <label>
                    <input
                        id="field-radio-group-option-3"
                        type="radio"
                        value="3"
                        {...register('radio')}
                    />
                    3
                </label>
            </div>
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

export { Step2 };

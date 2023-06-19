import { useForm, useFieldArray } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Button } from '../Button';
import { Label } from '../Label';
import { addForm } from '../../store/formsSlice';
import { Step2Props, FormValues } from './Step2.props';
import styles from './Step2.module.scss';
import stylesInput from '../Input/Input.module.scss';

function Step2({ setActive }: Step2Props) {
    const forms = useAppSelector((state) => state.forms.forms);
    const dispatch = useAppDispatch();

    const checkbox = [
        { id: 'field-checkbox-group-option-1', value: '1', text: '1' },
        { id: 'field-checkbox-group-option-2', value: '2', text: '2' },
        { id: 'field-checkbox-group-option-3', value: '3', text: '3' },
    ];

    const radio = [
        { id: 'field-radio-group-option-1', value: '1', text: '1' },
        { id: 'field-radio-group-option-2', value: '2', text: '2' },
        { id: 'field-radio-group-option-3', value: '3', text: '3' },
    ];

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            radio: forms.radio,
            checkbox: forms.checkbox,
            advantages: forms.advantages,
        },
        mode: 'onChange',
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'advantages',
    });

    const onSubmit = (values: FormValues) => {
        dispatch(addForm(values));
        setActive(3);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
                Advantages
                {fields.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.advantages}>
                                <input
                                    type="text"
                                    id={`field-advatages-${index + 1}`}
                                    className={stylesInput.input}
                                    placeholder="Placeholder"
                                    {...register(`advantages.${index}.name`, {
                                        required:
                                            'Поле обязательно к заполнению',
                                        maxLength: {
                                            value: 20,
                                            message: 'Максимум 20 символов',
                                        },
                                    })}
                                />
                                <button
                                    id={`button-remove-${index + 1}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        remove(index);
                                    }}
                                >
                                    <img src="/icon-6.svg" alt="" />
                                </button>
                            </div>
                            <p className="error">
                                {errors?.advantages?.length &&
                                    errors?.advantages[index]?.name?.message}
                            </p>
                        </div>
                    );
                })}
                <button
                    className={styles.addBtn}
                    id="button add"
                    onClick={(e) => {
                        e.preventDefault();
                        append({ name: '' });
                    }}
                >
                    <img src="/icon-7.svg" alt="" />
                </button>
            </div>
            <div className={styles.formGroup}>
                Checkbox group
                {checkbox.map((item, index) => (
                    <div key={index}>
                        <Label>
                            <input
                                id={`field-checkbox-group-option-${item.id}`}
                                type="checkbox"
                                value={item.value}
                                {...register('checkbox')}
                            />
                            {item.text}
                        </Label>
                    </div>
                ))}
            </div>
            <div className={styles.formGroup}>
                Radio group
                {radio.map((item, index) => (
                    <div key={index}>
                        <Label>
                            <input
                                id={`field-radio-group-option-${item.id}`}
                                type="radio"
                                value={item.value}
                                {...register('radio')}
                            />
                            {item.text}
                        </Label>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <Button
                    text="Назад"
                    bg="white"
                    color="#5558FA"
                    id="button-back"
                    click={() => {
                        dispatch(addForm(watch()));
                        setActive(1);
                    }}
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

import { Button } from '../../components/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from './Step2.module.scss';
import stylesInput from '../Input/Input.module.scss';
import { useDispatch } from 'react-redux';
import { addForm } from '../../store/formsSlice';

function Step2({ active, setActive }) {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            radio: '1',
            checkbox: '',
            advantages: [
                {
                    name: '',
                },
                {
                    name: '',
                },
                {
                    name: '',
                },
            ],
        },
        mode: 'onChange',
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'advantages',
    });

    const onSubmit = (values) => {
        dispatch(addForm(values));
        setActive(3);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={active === 2 ? { display: 'flex' } : { display: 'none' }}
        >
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
                                    <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.453 15.6522L2.55826 7.15225C2.52719 6.85703 2.75867 6.5999 3.05552 6.5999H12.9447C13.2416 6.5999 13.4731 6.85703 13.442 7.15225L12.5472 15.6522C12.5205 15.9067 12.3059 16.0999 12.05 16.0999H3.95025C3.69437 16.0999 3.47979 15.9067 3.453 15.6522Z"
                                            fill="#CCCCCC"
                                        />
                                        <path
                                            d="M15.0001 4.6999H1.00012C0.72398 4.6999 0.500122 4.47605 0.500122 4.1999V3.2999C0.500122 3.02376 0.72398 2.7999 1.00012 2.7999H3.35511C3.44983 2.7999 3.54261 2.77299 3.62263 2.72231L6.37761 0.977493C6.45764 0.92681 6.55041 0.899902 6.64514 0.899902H9.35511C9.44983 0.899902 9.54261 0.92681 9.62263 0.977493L12.3776 2.72231C12.4576 2.77299 12.5504 2.7999 12.6451 2.7999H15.0001C15.2763 2.7999 15.5001 3.02376 15.5001 3.2999V4.1999C15.5001 4.47604 15.2763 4.6999 15.0001 4.6999Z"
                                            fill="#CCCCCC"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="error">
                                {errors?.advantages?.length &&
                                    errors?.advantages[index]?.name.message}
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
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.99998 1C6.99998 0.447715 6.55226 0 5.99998 0C5.44769 0 4.99998 0.447715 4.99998 1V4.99998H1C0.447716 4.99998 0 5.44769 0 5.99998C0 6.55226 0.447715 6.99998 1 6.99998H4.99998V11C4.99998 11.5522 5.44769 12 5.99998 12C6.55226 12 6.99998 11.5522 6.99998 11V6.99998H11C11.5522 6.99998 12 6.55226 12 5.99998C12 5.44769 11.5522 4.99998 11 4.99998H6.99998V1Z"
                            fill="#5558FA"
                        />
                    </svg>
                </button>
            </div>
            <div className={styles.formGroup}>
                Checkbox group
                <label>
                    <input
                        id="field-checkbox-group-option-1"
                        type="checkbox"
                        value="1"
                        {...register('checkbox')}
                    />
                    1
                </label>
                <label>
                    <input
                        id="field-checkbox-group-option-2"
                        type="checkbox"
                        value="2"
                        {...register('checkbox')}
                    />
                    2
                </label>
                <label>
                    <input
                        id="field-checkbox-group-option-3"
                        type="checkbox"
                        value="3"
                        {...register('checkbox')}
                    />
                    3
                </label>
            </div>
            <div className={styles.formGroup}>
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
                    click={() => {
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

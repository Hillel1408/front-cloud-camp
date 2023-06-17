import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '../../components/Button';
import { addForm } from '../../store/formsSlice';
import styles from './Step2.module.scss';
import stylesInput from '../Input/Input.module.scss';

import { Label } from '../Label';

function Step2({ active, setActive }) {
    const forms = useSelector((state) => state.forms.forms);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
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

    const onSubmit = (values) => {
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
                    <img src="/icon-7.svg" alt="" />
                </button>
            </div>
            <div className={styles.formGroup}>
                Checkbox group
                <Label direction="row">
                    <input
                        id="field-checkbox-group-option-1"
                        type="checkbox"
                        value="1"
                        {...register('checkbox')}
                    />
                    1
                </Label>
                <Label direction="row">
                    <input
                        id="field-checkbox-group-option-2"
                        type="checkbox"
                        value="2"
                        {...register('checkbox')}
                    />
                    2
                </Label>
                <Label direction="row">
                    <input
                        id="field-checkbox-group-option-3"
                        type="checkbox"
                        value="3"
                        {...register('checkbox')}
                    />
                    3
                </Label>
            </div>
            <div className={styles.formGroup}>
                Radio group
                <Label direction="row">
                    <input
                        id="field-radio-group-option-1"
                        type="radio"
                        value="1"
                        {...register('radio')}
                    />
                    1
                </Label>
                <Label direction="row">
                    <input
                        id="field-radio-group-option-2"
                        type="radio"
                        value="2"
                        {...register('radio')}
                    />
                    2
                </Label>
                <Label direction="row">
                    <input
                        id="field-radio-group-option-3"
                        type="radio"
                        value="3"
                        {...register('radio')}
                    />
                    3
                </Label>
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

import { useForm } from 'react-hook-form';
import { Label } from '../Label';
import { Button } from '../../components/Button';
import { CustomSelect } from '../CustomSelect';
import stylesInput from '../Input/Input.module.scss';
import styles from './Step1.module.scss';
import { useState } from 'react';

function Step1({ active, setActive }) {
    const [value, setValue] = useState('');
    const options = [
        {
            value: 'man',
            label: 'man',
            id: 'field-sex-option-man',
        },
        {
            value: 'woman',
            label: 'woman',
            id: 'field-sex-option-woman',
        },
    ];

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nickname: '',
            name: '',
            sername: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        console.log(values);
        setActive(3);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={active === 1 ? { display: 'block' } : { display: 'none' }}
        >
            <div>
                <Label>
                    Nickname
                    <input
                        type="text"
                        className={stylesInput.input}
                        placeholder="Placeholder"
                        id="field-nickname"
                        {...register('nickname', {
                            required: 'Поле обязательно к заполнению',
                            maxLength: {
                                value: 30,
                                message: 'Максимум 30 символов',
                            },
                            pattern: {
                                value: /^[A-zА-яЁё0-9]+$/,
                                message: 'Только буквы и цифры',
                            },
                        })}
                    />
                </Label>
                <p className="error">
                    {errors?.nickname && errors?.nickname?.message}
                </p>
            </div>
            <div>
                <Label>
                    Name
                    <input
                        type="text"
                        className={stylesInput.input}
                        placeholder="Placeholder"
                        id="field-name"
                        {...register('name', {
                            required: 'Поле обязательно к заполнению',
                            maxLength: {
                                value: 50,
                                message: 'Максимум 50 символов',
                            },
                            pattern: {
                                value: /^[A-zА-яЁё]+$/,
                                message: 'Только буквы',
                            },
                        })}
                    />
                </Label>
                <p className="error">{errors?.name && errors?.name?.message}</p>
            </div>
            <div>
                <Label>
                    Sername
                    <input
                        type="text"
                        className={stylesInput.input}
                        placeholder="Placeholder"
                        id="field-sername"
                        {...register('sername', {
                            required: 'Поле обязательно к заполнению',
                            maxLength: {
                                value: 50,
                                message: 'Максимум 50 символов',
                            },
                            pattern: {
                                value: /^[A-zА-яЁё]+$/,
                                message: 'Только буквы',
                            },
                        })}
                    />
                </Label>
                <p className="error">
                    {errors?.sername && errors?.sername?.message}
                </p>
            </div>
            <div>
                <Label>
                    Sex
                    <CustomSelect
                        options={options}
                        placeholder="Не выбрано"
                        value={value}
                        setValue={setValue}
                        id="field-sex"
                        getOptionLabel={(props) => {
                            const { id, label } = props;
                            return <div id={id}>{label}</div>;
                        }}
                    />
                </Label>
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

import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useNavigate } from 'react-redux';
import { Label } from '../Label';
import { Button } from '../../components/Button';
import { CustomSelect } from '../CustomSelect';
import { addForm } from '../../store/formsSlice';
import stylesInput from '../Input/Input.module.scss';
import styles from './Step1.module.scss';

function Step1({ active, setActive }) {
    const forms = useSelector((state) => state.forms.forms);
    const dispatch = useDispatch();

    const navigate = useNavigate();

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
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nickname: forms.nickname,
            name: forms.name,
            sername: forms.sername,
            sex: forms.sex,
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        setActive(2);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={active === 1 ? { display: 'flex' } : { display: 'none' }}
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
                            onChange: (e) => {
                                dispatch(addForm({ nickname: e.target.value }));
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
                            onChange: (e) => {
                                dispatch(addForm({ name: e.target.value }));
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
                            onChange: (e) => {
                                dispatch(addForm({ sername: e.target.value }));
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
                    <Controller
                        name="sex"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CustomSelect
                                options={options}
                                placeholder="Не выбрано"
                                value={options.find((c) => c.value === value)}
                                onChange={(val) => {
                                    onChange(val.value);
                                    dispatch(addForm({ sex: val.value }));
                                }}
                                id="field-sex"
                                getOptionLabel={(props) => {
                                    const { id, label } = props;
                                    return <div id={id}>{label}</div>;
                                }}
                            />
                        )}
                        rules={{ required: 'Поле обязательно к заполнению' }}
                    />
                </Label>
                <p className="error">{errors?.sex && errors?.sex?.message}</p>
            </div>
            <div className="buttons">
                <Button
                    text="Назад"
                    bg="white"
                    color="#5558FA"
                    id="button-back"
                    click={() => {
                        navigate('/');
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

export { Step1 };

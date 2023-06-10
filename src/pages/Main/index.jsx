import styles from './Main.module.scss';
import stylesInput from '../../components/Input/Input.module.scss';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

function Main() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: 'etemax@bk.ru',
            tel: '+7 (952) 422-62-44',
        },
        mode: 'onChange',
    });

    const navigate = useNavigate();

    const onSubmit = (values) => {
        console.log(values);
        navigate('/steps');
    };

    return (
        <div className={styles.profile}>
            <div className={styles.profileHead}>
                <div className={styles.profileAvatar}>
                    <img src="/avatar.jpg" alt="" />
                </div>
                <div className={styles.profileFlex}>
                    <h1 className="title">Дараган Максим</h1>
                    <ul>
                        <li>
                            <img src="/icon-1.svg" alt="" />
                            <a href="https://t.me/etemax" target="blank">
                                Telegram
                            </a>
                        </li>
                        <li>
                            <img src="/icon-1.svg" alt="" />
                            <a
                                href="https://github.com/Hillel1408"
                                target="blank"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <img src="/icon-1.svg" alt="" />
                            <a href="/">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>
                        Номер телефона
                        <InputMask
                            className={stylesInput.input}
                            mask={'+7 (999) 999-99-99'}
                            alwaysShowMask={false}
                            placeholder="+7 999 999-99-99"
                            {...register('tel', {
                                required: 'Поле обязательно к заполнению',
                            })}
                        />
                    </Label>
                    <p className="error">
                        {errors?.tel && errors?.tel?.message}
                    </p>
                </div>
                <div>
                    <Label>
                        Email
                        <input
                            className={stylesInput.input}
                            placeholder="tim.jennings@example.com"
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Введите корректный email',
                                },
                            })}
                        />
                    </Label>
                    <p className="error">
                        {errors?.email && errors?.email?.message}
                    </p>
                </div>
                <Button
                    text="Начать"
                    bg="#5558FA"
                    color="white"
                    id="button-start"
                    type="submit"
                />
            </form>
        </div>
    );
}

export { Main };

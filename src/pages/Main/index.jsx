import styles from './Main.module.scss';
import stylesInput from '../../components/Input/Input.module.scss';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';

function Main() {
    return (
        <div className={styles.profile}>
            <div className={styles.profileHead}>
                <div className={styles.profileAvatar}>
                    <img src="/avatar.jpg" alt="" />
                </div>
                <div className={styles.profileFlex}>
                    <h1>Дараган Максим</h1>
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
            <form action="#">
                <Label>
                    Номер телефона
                    <input
                        className={stylesInput.input}
                        disabled
                        placeholder="+7 952 422-62-44"
                    />
                </Label>
                <Label>
                    Email
                    <input
                        className={stylesInput.input}
                        disabled
                        placeholder="etemax@bk.ru"
                    />
                </Label>
                <Button
                    text="Начать"
                    bg="#5558FA"
                    color="white"
                    id="button-start"
                />
            </form>
        </div>
    );
}

export { Main };

import { Button } from '../../components/Button';

function Step2({ active, setActive }) {
    return (
        <form style={active === 2 ? { display: 'block' } : { display: 'none' }}>
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

export { Step2 };

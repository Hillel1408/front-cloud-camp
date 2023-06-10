import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Step3.module.scss';

function Step3({ active }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {},
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={active === 3 ? { display: 'block' } : { display: 'none' }}
        >
            123
        </form>
    );
}

export { Step3 };

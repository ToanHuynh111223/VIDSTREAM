import styles from './SignUp.module.scss'
import clsx from 'clsx';
import SignupContainer from './components/SignupContainer';
function SignUp() {
    return (
        <section className={clsx(styles.spacemtb)}>
            <SignupContainer />
        </section>
    );
}

export default SignUp;
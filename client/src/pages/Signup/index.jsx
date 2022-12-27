import styles from './Signup.module.scss'
import clsx from 'clsx';
import SignupContainer from './components/SignupContainer';
function Signup() {
    return (
        <section className={clsx(styles.spacemtb)}>
            <SignupContainer />
        </section>
    );
}

export default Signup;